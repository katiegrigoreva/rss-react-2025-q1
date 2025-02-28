import { BaseSyntheticEvent } from 'react';
import styles from './heroesList.module.css';
import HeroesListItem from './HeroesListItem';
import { selectCheckbox, selectHero, unselectCheckbox, unselectHero } from '../../src/slices/heroesListSlice';
import { useDispatch } from 'react-redux';

export type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
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

const HeroesList = (props: HeroesListProps) => {
  /*   const navigate = useNavigate();
   */ const dispatch = useDispatch();

  /* const onCardClickHandle = (event: BaseSyntheticEvent, item: heroData) => {
    if (event.target.className === 'checkbox') {
      return;
    }
    if (location.pathname.includes('details')) {
      navigate(-1);
      return;
    }
    navigate(`details/id:${item.id}${location.search}`);
  }; */

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
          onCardClick={() => {}}
          onCheckboxClick={(e: BaseSyntheticEvent) => onCheckboxClickHandle(e, item)}
        ></HeroesListItem>
      );
    });
    return items;
  }

  const items = renderItems(props.heroesList);
  const content = items.length !== 0 ? items : <h3 className={styles.h3}>No heroes found</h3>;

  return (
    <>
      <section className={styles.hero} role="cardList">
        <div className={styles.hero__list}>{content}</div>
      </section>
    </>
  );
};
export default HeroesList;
