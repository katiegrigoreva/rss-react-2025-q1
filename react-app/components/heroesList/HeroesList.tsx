import { BaseSyntheticEvent } from 'react';
import styles from './heroesList.module.css';
import HeroesListItem from './HeroesListItem';
import { selectCheckbox, selectHero, unselectCheckbox, unselectHero } from '../../slices/heroesListSlice';
import { useDispatch } from 'react-redux';
import { getTransformedData } from '../../helpers/getTransformedData';
import { useRouter } from 'next/router';
import { Flyout } from '../flyout/Flyout';
import Pagination from '../pagination/Pagination.tsx';

export type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

type HeroesList = {
  data: ApiResponse;
  children?: React.ReactNode;
};

export type heroData = {
  id: number;
  name: string;
  description: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  img: string;
};

export type ApiResponse = {
  data: {
    results: heroData[];
    total: number;
  };
};

const HeroesList = ({ data, children }: HeroesList) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const heroesListParams = {
    heroesList: data?.data.results,
    totalHeroes: data?.data.total,
  };

  const heroes = getTransformedData(heroesListParams).heroesList;
  const total = getTransformedData(heroesListParams).totalHeroes;

  const onCheckboxClickHandle = (e: BaseSyntheticEvent, hero: heroData) => {
    if (e.target.checked) {
      dispatch(selectHero(hero));
      dispatch(selectCheckbox(e.target.name));
    } else {
      dispatch(unselectHero(hero.id));
      dispatch(unselectCheckbox(e.target.name));
    }
  };

  function renderItems(arr: heroData[]) {
    const items = arr.map((item) => {
      return (
        <HeroesListItem
          key={item.name}
          itemInfo={item}
          onCheckboxClick={(e: BaseSyntheticEvent) => onCheckboxClickHandle(e, item)}
        ></HeroesListItem>
      );
    });
    return items;
  }

  const items = renderItems(heroes);
  const content = items.length !== 0 ? items : <h3 className={styles.h3}>No heroes found</h3>;
  return (
    <>
      <section
        className={styles.hero}
        role="cardList"
        onClick={() => {
          if (router.asPath.includes('details')) {
            router.back();
          }
        }}
      >
        <div className={styles.hero__list}>{content}</div>
        {children}
      </section>
      <Pagination totalHeroes={total} />
      <Flyout />
    </>
  );
};
export default HeroesList;
