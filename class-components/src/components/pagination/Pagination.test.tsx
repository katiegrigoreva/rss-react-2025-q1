import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Pagination from './Pagination';
import { createMemoryHistory } from 'history';

describe('Pagination component', () => {
  it('updates URL query parameter when page changes', () => {
    const history = createMemoryHistory();
    const mockHeroes = 30;
    const mockChangePage = vi.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Pagination totalHeroes={mockHeroes} onChangePage={mockChangePage} />
      </Router>
    );
    const pageThree = screen.getByText('3');
    const pageTwo = screen.getByText('2');
    fireEvent.click(pageThree);
    expect(history.location.search).toBe('?limit=8&offset=16');
    fireEvent.click(pageTwo);
    expect(history.location.search).toBe('?limit=8&offset=8');
  });
});
