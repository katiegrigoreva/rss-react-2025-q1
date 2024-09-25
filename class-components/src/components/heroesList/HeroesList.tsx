import { useState, useEffect, BaseSyntheticEvent } from 'react';
import './heroesList.css';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Pagination from '../pagination/Pagination';
import { Outlet, useNavigate } from 'react-router';
import { useGetAllHeroesQuery, heroData } from '../../api/apiSlice';
import { getTransformedData } from '../../helpers/getTransformedData';
import { apiConstants } from '../../api/apiConstants';
import { Flyout } from '../flyout/Flyout';
import HeroesListItem from './HeroesListItem';

export type HeroesListProps = {
  heroesList: heroData[];
  totalHeroes: number;
};

const HeroesList = (props: HeroesListProps) => {
  const [query, setQuery] = useState(apiConstants._baseQuery);
  const navigate = useNavigate();
  /*   const context = useContext(ThemeContext);
   */ const { data, isLoading, isFetching, isError } = useGetAllHeroesQuery(query);

  useEffect(() => {
    if (selectedItems === 0) setIsFlyout(false);
    localStorage.removeItem('searchTerm');
    navigate('/');
  }, []);

  const changePage = (searchQuery: string) => {
    if (localStorage.getItem('searchTerm') === '' || localStorage.getItem('searchTerm') === null) {
      setQuery(searchQuery);
    }
  };
  const [isFlyout, setIsFlyout] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number>(0);

  const onCardClickHandle = (event: BaseSyntheticEvent, item: heroData) => {
    if (event.target.className !== 'checkbox') {
      navigate(`details/id:${item.id}`);
    }
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

  const items = renderItems(props.heroesList.length ? props.heroesList : getTransformedData(data).heroesList);
  const spinner = isLoading || isFetching ? <Spinner /> : null;
  const content = items.length !== 0 ? items : <h3>No heroes found</h3>;
  const errorMessage = isError ? <ErrorMessage /> : null;
  const flyout = isFlyout ? <Flyout selectedItems={selectedItems} /> : null;

  return (
    <>
      <section className="hero">
        {spinner}
        {errorMessage}
        <div className="hero__list">{content}</div>
        <Outlet />
      </section>
      <Pagination
        totalHeroes={props.totalHeroes ? props.totalHeroes : getTransformedData(data).totalHeroes}
        onChangePage={changePage}
      />
      {flyout}
    </>
  );
};
export default HeroesList;
