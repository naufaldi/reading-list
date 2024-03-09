/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './page';
import { createClient } from '@/lib/supabase/client';

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

it('App Router: Works with Server Components', () => {
  render(<LoginPage />);
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome back');
});

// Mock the Supabase client's createClient function
// jest.mock('@/lib/supabase/client', () => ({
//   createClient: jest.fn().mockReturnValue({
//     auth: {
//       signInWithPassword: jest.fn(),
//     },
//   }),
// }));

describe('LoginPage', () => {
  it('should display an error message when login fails', async () => {
    const errorMessage = 'Invalid login credentials';
    const mockSignInWithPassword = jest.fn().mockResolvedValue({
      data: null,
      error: { message: errorMessage },
    });

    // Mock the signInWithPassword to simulate a login failure
    const supabase = createClient();
    supabase.auth.signInWithPassword = mockSignInWithPassword;

    const { getByPlaceholderText, getByText, findByText } = render(
      <LoginPage />
    );

    // Simulate user input
    fireEvent.change(getByPlaceholderText('name@example.com'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByPlaceholderText('Password here'), {
      target: { value: 'wrongpassword' },
    });

    // Simulate form submission
    fireEvent.click(getByText('Sign In'));

    // Wait for the error message to appear
    await findByText(errorMessage);

    // Assertions
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'wrongpassword',
    });
    expect(await findByText(errorMessage)).toBeInTheDocument();
  });
});
