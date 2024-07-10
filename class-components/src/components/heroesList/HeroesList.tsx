import { useState, useEffect } from 'react';
import ApiConnector, { heroData } from '../../api/ApiConnector';
import './heroesList.css';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Pagination from '../pagination/Pagination';

export interface heroesListState {
  heroesList: heroData[];
  loading: boolean;
  error: boolean;
}

type HeroesListProps = {
  heroesList: heroData[];
};

const HeroesList = (props: HeroesListProps) => {
  const [heroesList, setHeroesList] = useState<heroData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(8);
  const apiConnector = new ApiConnector();

  const lastHeroIndex = currentPage * heroesPerPage;
  const firstHeroIndex = lastHeroIndex - heroesPerPage;

  const heroesToShow = (heroesArr: heroData[]) => {
    return heroesArr.slice(firstHeroIndex, lastHeroIndex);
  };

  const onChangePage = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    apiConnector.getAllHeroes().then(onListLoaded).catch(onError);
  }, []);

  useEffect(() => {
    onListLoaded(props.heroesList);
  }, [props.heroesList]);

  const onListLoaded = (newHeroesList: heroData[]) => {
    setHeroesList(() => newHeroesList);
    setLoading(() => false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  function renderItems(arr: heroData[]) {
    const items = arr.map((item) => {
      return (
        <li className="hero__item" key={item.name}>
          <img src={item.img} alt={item.name} />
          <div className="hero__name">{item.name}</div>
          <div className="hero__descr">{item.description}</div>
        </li>
      );
    });
    return items.length !== 0 ? items : <h3>There is no hero with such name</h3>;
  }

  const items = renderItems(heroesToShow(heroesList));
  const spinner = loading ? <Spinner /> : null;
  const content = loading ? null : items;
  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <>
      <div className="hero__list">
        {spinner}
        {errorMessage}
        {content}
      </div>
      <Pagination heroesPerPage={heroesPerPage} totalHeroes={heroesList.length} onChangePage={onChangePage} />
    </>
  );
};
export default HeroesList;
