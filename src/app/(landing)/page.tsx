import MainPage from '@/lib/pages/main';

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/naufaldi/reading-list',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return parseInt(json['stargazers_count']).toLocaleString();
  } catch (error) {
    return null;
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars();
  console.log('stars', stars);

  return (
    <>
      <MainPage stars={stars || ''} />
    </>
  );
}
