import { heroData } from '../../api/ApiConnector';
import HeroesListItem from '../heroesListItem/heroesListItem';
import './heroesList.css';
import { Outlet, useNavigate } from 'react-router';

type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

const HeroesList = (props: HeroesListProps) => {
  const navigate = useNavigate();

  const cardClickHandle = (item: heroData) => {
    if (location.pathname.includes('details')) {
      navigate(-1);
    }
    navigate(`details/id:${item.id}${location.search}`);
  };

  function renderItems(arr: heroData[]) {
    const items = arr.map((item) => {
      return <HeroesListItem key={item.name} itemInfo={item} onCardClick={() => cardClickHandle(item)} />;
    });
    return items.length !== 0 ? items : <h3>There is no hero with such name</h3>;
  }

  const items = renderItems(props.heroesList);

  return (
    <>
      <section className="hero" role="cardList">
        <div className="hero__list">{items}</div>
        <Outlet />
      </section>
    </>
  );
};
export default HeroesList;
