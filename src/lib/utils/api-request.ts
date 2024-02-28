import SteinStore from 'stein-js-client';

export type BookListProps = {
  id: string;
  title: string;
  author: string;
  pages: string;
  status: string;
};

const getBooksApi =
  'https://api.steinhq.com/v1/storages/65dd2cdd4a64236312082f33/books';

export async function getBookList() {
  const res = await fetch(getBooksApi);
  const books = (await res.json()) as BookListProps[];
  return books;
}

export async function addBook(newBook: BookListProps): Promise<BookListProps> {
  // const newId = await fetchAndIncrementLastId(); // Fetch, increment, and prepare the new ID
  // const bookToAdd = { ...newBook, id: newId }; // Include the new ID in the bookToAdd object
  const bookToAdd = { ...newBook }; // Include the new ID in the bookToAdd object

  const response = await fetch(getBooksApi, {
    method: 'POST', // Adjust based on Stein's requirements for adding new entries
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([bookToAdd]), // Adjust based on Stein's API expectations
  });

  if (!response.ok) {
    throw new Error('Failed to add the book');
  }

  return await response.json();
}

const storeUrl = 'https://api.steinhq.com/v1/storages/65dd2cdd4a64236312082f33';
const store = new SteinStore(storeUrl);

export async function editBook(
  bookId: string,
  bookUpdates: BookListProps
): Promise<BookListProps> {
  const response = await fetch(`${getBooksApi}/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookUpdates),
  });

  if (!response.ok) {
    throw new Error('Failed to update the book');
  }

  return await response.json();
}

export async function deleteBook(bookId: string): Promise<void> {
  const response = await fetch(`${getBooksApi}/${bookId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete the book');
  }
}
