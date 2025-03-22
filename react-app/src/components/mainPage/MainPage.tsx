import { useEffect, useState } from 'react';
import ApiConnector, { CountryData } from '../../api/ApiConnector';
import CardList from '../cardList/CardList';
import Spinner from '../spinner/Spinner';
import ControlPanel from '../controlPanel/ControlPanel';
import { useSearchParams } from 'react-router-dom';

const MainPage = () => {
  const apiConnector = new ApiConnector();
  const [loading, setLoading] = useState(false);
  const [cardList, setCardList] = useState<CountryData[]>([]);
  const [filteredCardList, setFilteredCardList] = useState<CountryData[]>([]);
  const trackSearchParams = useSearchParams(location.search);
  const searchParams = new URLSearchParams(location.search);
  const [region, setRegion] = useState(searchParams.get('region') || 'All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    apiConnector
      .getData('https://restcountries.com/v3.1/all?fields=name,population,region,flags')
      .then((data) => {
        setCardList(data);
        setFilteredCardList(data);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    filterCardList();
  }, [loading]);

  useEffect(() => {
    setRegion(() => searchParams.get('region') || 'All');
    setSearch(() => searchParams.get('search') || '');
  }, [trackSearchParams]);

  useEffect(() => {
    filterCardList();
  }, [region, search]);

  const filterCardList = () => {
    const filteredCards = cardList.filter((country) => {
      const hasCountry = country.name.common.toLowerCase().includes(search);
      return region !== 'All' ? country.region === region && hasCountry : hasCountry;
    });
    setFilteredCardList(filteredCards);
  };

  const sortByName = (currentSortUp: boolean) => {
    if (currentSortUp === true) {
      filteredCardList.sort((a, b) => (a.name.common > b.name.common ? -1 : 1));
    } else {
      filteredCardList.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
    }
  };

  const sortByPopulation = (currentSortUp: boolean) => {
    if (currentSortUp === true) {
      filteredCardList.sort((a, b) => b.population - a.population);
    } else {
      filteredCardList.sort((a, b) => a.population - b.population);
    }
  };

  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      <section className="main">
        {spinner}
        <ControlPanel handleNameSort={sortByName} handlePopulationSort={sortByPopulation} />
        <CardList cardList={filteredCardList} />
      </section>
    </>
  );
};

export default MainPage;
