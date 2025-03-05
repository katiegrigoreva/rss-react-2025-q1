import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HeroInfo, { heroInfo } from './HeroInfo';
import store from '../../store';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockRouter } from '../../test/helpers/mockRouter';

describe('Tests for the Detailed Card component', () => {
  const mockHeroData: heroInfo = {
    heroInfo: {
      id: 1,
      name: 'mockHero1',
      description: 'ipsum',
      img: '/public/favicon.png',
    },
  };

  it('correctly displays the detailed card data', () => {
    render(
      <RouterContext.Provider value={mockRouter()}>
        <Provider store={store}>
          <HeroInfo heroInfo={mockHeroData.heroInfo}></HeroInfo>
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByText('NAME: mockHero1')).toBeInTheDocument();
    expect(screen.getByText('ipsum')).toBeInTheDocument();
  });

  it('hides the component when clicking the close button', () => {
    const router = mockRouter();

    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <HeroInfo heroInfo={mockHeroData.heroInfo}></HeroInfo>
        </Provider>
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByRole('closeBtn'));
    expect(router.back).toHaveBeenCalledOnce();
  });
});
