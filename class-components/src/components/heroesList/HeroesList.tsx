import { heroData } from '../../api/ApiConnector';
import './heroesList.css';
import { Outlet, useNavigate } from 'react-router';

type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

const HeroesList = (props: HeroesListProps) => {
  const navigate = useNavigate();

  function renderItems(arr: heroData[]) {
    const items = arr.map((item) => {
      return (
        <li
          className="hero__item"
          key={item.name}
          onClick={() => {
            if (location.pathname.includes('details')) {
              navigate(-1);
            }
            navigate(`details/id:${item.id}${location.search}`);
          }}
        >
          <img src={item.img} alt={item.name} />
          <div className="hero__name">{item.name}</div>
          <div className="hero__descr">{item.description}</div>
        </li>
      );
    });
    return items.length !== 0 ? items : <h3>There is no hero with such name</h3>;
  }

  const items = renderItems(props.heroesList);

  return (
    <>
      <section className="hero">
        <div className="hero__list">{items}</div>
        <Outlet />
      </section>
    </>
  );
};
export default HeroesList;
