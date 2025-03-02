import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

export function mockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: vi.fn(),
    beforePopState: vi.fn(),
    prefetch: vi.fn(),
    forward: vi.fn(),
    push: vi.fn(),
    reload: vi.fn(),
    replace: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    locale: undefined,
    locales: undefined,
    ...router,
  };
}
describe('Pagination component', () => {
  it('updates URL query parameter when page changes', () => {
    const mockHeroes = 30;

    render(
      <RouterContext.Provider value={mockRouter({ asPath: '/?limit=8&offset=0' })}>
        <Pagination totalHeroes={mockHeroes} />
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
