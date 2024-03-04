import { signIn } from 'next-auth/react'; // Corrected import for client-side signIn

export async function authenticate(formData: {
  email: string;
  password: string;
}) {
  try {
    // Call the signIn method with provider 'credentials' and formData
    console.log('formData authenticate', formData);

    const result = await signIn('credentials', {
      // Make sure the provider key is lowercase to match the NextAuth configuration
      redirect: false, // Prevents redirecting, allowing us to handle the response in this function
      email: formData.email,
      password: formData.password,
    });

    // // Handle the response based on the result
    // if (result?.error) {
    //   // Custom error handling or message mapping can be done here
    //   return result.error;
    // }
    console.log('error', result);

    // Optional: handle successful sign-in if needed
    return null; // Return null or a success message as appropriate
  } catch (error) {
    // Handling specific NextAuth errors or general errors
    console.error('Authentication error:', error);
    if (error instanceof Error && error.name === 'AuthError') {
      // Specific handling for AuthError if needed
      return 'Authentication failed. Please check your credentials.';
    }
    return 'An unexpected error occurred. Please try again later.';
  }
}
