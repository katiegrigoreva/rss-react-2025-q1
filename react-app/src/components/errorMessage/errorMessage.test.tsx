import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';
import { render, screen } from '@testing-library/react';

describe('Error message', () => {
  it('renders image', () => {
    render(<ErrorMessage />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
