import { useState } from 'react';
import Header from '../header/Header';
import SearchPanel from '../searchPanel/SearchPanel';

import './app.css';
import HeroesList from '../heroesList/HeroesList';
import ApiConnector, { heroData } from '../../api/ApiConnector';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

export type AppProps = {
  onUpdateSearch: onUpdateSearchType;
};
export type onUpdateSearchType = {
  (arg: string): void;
};

const App = () => {
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
    setLoading(false);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="appContainer">
      <Header />
      <div className="searchPanel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <button className="searchPanel__btn" onClick={getSearchData}>
          Search
        </button>
      </div>
      {spinner}
      {errorMessage}
      <HeroesList heroesList={heroesList} />
    </div>
  );
};

export default App;
