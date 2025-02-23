import { useEffect, useState } from 'react';
import HeroesList from '../../heroesList/HeroesList';
import SearchPanel from '../../searchPanel/SearchPanel';
import { ThemeSelector } from '../../../../components/themeSelector/ThemeSelector';
import './mainPage.css';
import { useGetSearchHeroesQuery } from '../../../api/apiSlice';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import Spinner from '../../spinner/Spinner';
import { getTransformedData } from '../../../helpers/getTransformedData';
import { apiConstants } from '../../../api/apiConstants';
import { useLocation, useNavigate } from 'react-router';
import Pagination from '../../pagination/Pagination';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { heroesFetched } from '../../../slices/heroesListSlice';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [query, setQuery] = useState<string>(apiConstants._baseQuery);
  const [isSearch, setIsSearch] = useState(true);
  const { data, isLoading, isFetching, isError } = useGetSearchHeroesQuery(
    { searchValue: searchTerm, query: query.slice(1) },
    {
      skip: isSearch === false,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    dispatch(heroesFetched(data?.heroesList));
  }, [data]);

  useEffect(() => {
    setQuery(location.search.length ? location.search : apiConstants._baseQuery);
  }, [location.search]);

  const onUpdateSearch = (newTerm: string) => {
    setIsSearch(false);
    setSearchTerm(newTerm);
  };

  const errorMessage = isError ? <ErrorMessage /> : null;
  const spinner = isLoading || isFetching ? <Spinner /> : null;
  const heroes = getTransformedData(data).heroesList;
  const totalHeroes = getTransformedData(data).totalHeroes;

  return (
    <>
      <section className="controlPanel">
        <div className="searchPanel">
          <SearchPanel onUpdateSearch={onUpdateSearch} />
          <button
            className="searchPanel__btn"
            onClick={() => {
              setIsSearch(true);
              navigate('/');
            }}
          >
            Search
          </button>
        </div>
        <ThemeSelector />
      </section>
      {spinner}
      {errorMessage}
      <HeroesList heroesList={heroes} totalHeroes={totalHeroes} />
      <Pagination totalHeroes={totalHeroes} />
    </>
  );
};

export default Main;
