import { useState, useEffect } from 'react';
import ApiConnector, { heroData } from '../../api/ApiConnector';
import './heroesList.css';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Pagination from '../pagination/Pagination';
import HeroInfo from '../heroInfo/HeroInfo';
import { apiConstants } from '../../api/apiConstants';

type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

const HeroesList = (props: HeroesListProps) => {
  const [heroesList, setHeroesList] = useState<heroData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [heroesPerPage] = useState(8);
  const [showInfoComponent, setShowInfoComponent] = useState(false);
  const [heroId, setHeroId] = useState(0);
  const [totalHeroes, setTotalHeroes] = useState(0);
  const maxTotalHeroes: number = 100;
  const apiConnector = new ApiConnector();

  useEffect(() => {
    console.log('render');
    onChangePage(apiConstants._baseQuery);
  }, []);

  useEffect(() => {
    onListLoaded(props.heroesList);
    setTotalHeroes(0);
  }, [props.heroesList]);

  const onChangePage = (query: string) => {
    console.log('onchangepage');

    setLoading(() => true);

    if (localStorage.getItem('searchTerm')) {
      const term = localStorage.getItem('searchTerm');
      const termToUse = term ? term : '';
      apiConnector
        .getSearchData(termToUse, query)
        .then((data) => {
          onListLoaded(data.heroesList);
          setTotalHeroes(data.totalHeroes);
        })
        .catch(onError)
        .finally(() => {
          setLoading(false);
        });
    } else {
      apiConnector
        .getAllHeroes(query)
        .then((data: HeroesListProps) => {
          onListLoaded(data.heroesList);
          setTotalHeroes(data.totalHeroes < maxTotalHeroes ? data.totalHeroes : maxTotalHeroes);
        })
        .catch(onError)
        .finally(() => {
          setLoading(() => false);
        });
    }
  };

  const onListLoaded = (newHeroesList: heroData[]) => {
    setHeroesList(() => newHeroesList);
  };

  const onError = () => {
    setError(true);
  };

  function renderItems(arr: heroData[]) {
    const items = arr.map((item) => {
      return (
        <li
          className="hero__item"
          key={item.name}
          onClick={() => {
            setHeroId(() => item.id);
            setShowInfoComponent(!showInfoComponent);
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

  const items = renderItems(heroesList);
  const spinner = loading ? <Spinner /> : null;
  const content = loading ? null : items;
  const errorMessage = error ? <ErrorMessage /> : null;
  const infoComponent = showInfoComponent ? <HeroInfo heroId={heroId} /> : null;

  return (
    <>
      <section className="hero">
        {spinner}
        {errorMessage}
        <div className="hero__list">{content}</div>
        {infoComponent}
      </section>
      <Pagination
        heroesPerPage={heroesPerPage}
        totalHeroes={totalHeroes ? totalHeroes : props.totalHeroes}
        onChangePage={() => onChangePage(location.search.slice(1))}
      />
    </>
  );
};
export default HeroesList;
