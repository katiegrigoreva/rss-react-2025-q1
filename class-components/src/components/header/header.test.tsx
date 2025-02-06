import { describe, expect, it } from 'vitest';
import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders header', () => {
    render(<Header />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('MARVEL HEROES');
  });
});
