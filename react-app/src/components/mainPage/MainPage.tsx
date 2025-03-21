import { useEffect, useState } from 'react';
import ApiConnector, { CountryData } from '../../api/ApiConnector';
import CardList from '../cardList/CardList';
import Spinner from '../spinner/Spinner';
import ControlPanel from '../controlpanel/ControlPanel';

const MainPage = () => {
  const apiConnector = new ApiConnector();
  const [loading, setLoading] = useState(false);
  const [cardList, setCardList] = useState<CountryData[]>([]);

  useEffect(() => {
    setLoading(true);
    apiConnector
      .getData('https://restcountries.com/v3.1/all?fields=name,population,region,flags')
      .then((data) => {
        setCardList(data);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      <section className="main">
        {spinner}
        <ControlPanel />
        <CardList cardList={cardList} />
      </section>
    </>
  );
};

export default MainPage;
