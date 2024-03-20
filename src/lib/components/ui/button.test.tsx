// button terrender
// bisa parsing text

import { render, screen } from '@testing-library/react';
import { Button } from './button';

// bisa parsing variant
it('should render a button with the class of primary', () => {
  render(<Button variant="default"> Halo </Button>);
  const primaryButton = screen.getByRole('button', { name: /Halo/i });
  expect(primaryButton).toHaveClass(
    'bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90'
  );
  expect(primaryButton).toHaveRole('button');
});
