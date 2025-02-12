import { useState, useEffect, BaseSyntheticEvent } from 'react';
import './heroesList.css';
import { Outlet, useNavigate } from 'react-router';
import { heroData } from '../../api/apiSlice';
import { Flyout } from '../flyout/Flyout';
import HeroesListItem from './HeroesListItem';

export type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

const HeroesList = (props: HeroesListProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedItems === 0) setIsFlyout(false);
    navigate('/');
  }, []);

  const [isFlyout, setIsFlyout] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number>(0);

  const onCardClickHandle = (event: BaseSyntheticEvent, item: heroData) => {
    if (event.target.className === 'checkbox') {
      /*       (e: BaseSyntheticEvent) => onCheckboxClickHandle(e);
       */ return;
      /* navigate(`details/id:${item.id}${location.search}`); */
    }
    if (location.pathname.includes('details')) {
      navigate(-1);
      return;
    }
    navigate(`details/id:${item.id}${location.search}`);
  };
  const onCheckboxClickHandle = (e: BaseSyntheticEvent) => {
    if (e.target.checked) {
      setIsFlyout(true);
      setSelectedItems(() => selectedItems + 1);
    } else {
      setSelectedItems(() => selectedItems - 1);
    }
  };

  function renderItems(arr: heroData[]) {
    const items = arr.map((item) => {
      return (
        <HeroesListItem
          key={item.name}
          itemInfo={item}
          onCardClick={(e: BaseSyntheticEvent) => onCardClickHandle(e, item)}
          onCheckboxClick={(e: BaseSyntheticEvent) => onCheckboxClickHandle(e)}
        ></HeroesListItem>
      );
    });
    return items;
  }

  const items = renderItems(props.heroesList);
  const content = items.length !== 0 ? items : <h3>No heroes found</h3>;
  const flyout = isFlyout ? <Flyout selectedItems={selectedItems} /> : null;

  return (
    <>
      <section className="hero">
        <div className="hero__list">{content}</div>
        <Outlet />
      </section>
      {flyout}
    </>
  );
};
export default HeroesList;
