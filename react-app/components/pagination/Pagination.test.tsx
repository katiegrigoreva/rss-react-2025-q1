import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { customMockRouter } from '../../test/helpers/mockRouter';

describe('Pagination component', () => {
  it('updates URL query parameter when page changes', () => {
    const mockHeroes = 30;
    render(
      <RouterContext.Provider value={customMockRouter({ asPath: '/?limit=8&offset=0' })}>
        <SearchParamsContext.Provider value={new URLSearchParams('/?limit=8&offset=0')}>
          <Pagination totalHeroes={mockHeroes} />
        </SearchParamsContext.Provider>
      </RouterContext.Provider>
    );

    const pageThree = screen.getByText('3');
    const pageTwo = screen.getByText('2');

    fireEvent.click(pageThree);
    expect(screen.getByText('3')).toHaveAttribute('href', '/?limit=8&offset=16');
    fireEvent.click(pageTwo);
    expect(screen.getByText('2')).toHaveAttribute('href', '/?limit=8&offset=8');
  });
});
