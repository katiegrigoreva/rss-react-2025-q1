import { BaseSyntheticEvent } from 'react';
import './heroesList.css';
import { Outlet, useNavigate } from 'react-router';
import { heroData } from '../../api/apiSlice';
import { Flyout } from '../flyout/Flyout';
import HeroesListItem from './HeroesListItem';
import { selectCheckbox, selectHero, unselectCheckbox, unselectHero } from '../../slices/heroesListSlice';
import { useDispatch } from 'react-redux';

export type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

const HeroesList = (props: HeroesListProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCardClickHandle = (event: BaseSyntheticEvent, item: heroData) => {
    if (event.target.className === 'checkbox') {
      return;
    }
    if (location.pathname.includes('details')) {
      navigate(-1);
      return;
    }
    navigate(`details/id:${item.id}${location.search}`);
  };

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
          onCardClick={(e: BaseSyntheticEvent) => onCardClickHandle(e, item)}
          onCheckboxClick={(e: BaseSyntheticEvent) => onCheckboxClickHandle(e, item)}
        ></HeroesListItem>
      );
    });
    return items;
  }

  const items = renderItems(props.heroesList);
  const content = items.length !== 0 ? items : <h3>No heroes found</h3>;

  return (
    <>
      <section className="hero">
        <div className="hero__list">{content}</div>
        <Outlet />
      </section>
      <Flyout />
    </>
  );
};
export default HeroesList;
