import { useState } from 'react';
import ApiConnector, { heroData } from '../../../api/ApiConnector';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import HeroesList from '../../heroesList/HeroesList';
import SearchPanel from '../../searchPanel/SearchPanel';
import Spinner from '../../spinner/Spinner';

const Main = () => {
  const [term, setTerm] = useState('');
  const [heroesList, setHeroesList] = useState<heroData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiConnector = new ApiConnector();

  const onUpdateSearch = (newTerm: string) => {
    setTerm(newTerm);
  };

  const getSearchData = () => {
    setLoading(true);
    return apiConnector
      .getSearchData(term)
      .then(onUpdateHeroesList)
      .catch(onError)
      .finally(() => {
        setLoading(false);
      });
  };

  const onUpdateHeroesList = (newHeroesList: heroData[]) => {
    setHeroesList(newHeroesList);
  };

  const onError = () => {
    setError(true);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      <div className="searchPanel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <button className="searchPanel__btn" onClick={getSearchData}>
          Search
        </button>
      </div>
      {spinner}
      {errorMessage}
      <HeroesList heroesList={heroesList} />
    </>
  );
};

export default Main;
