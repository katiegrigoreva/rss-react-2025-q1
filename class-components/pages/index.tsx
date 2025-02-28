import HeroesList, { heroData } from '../components/heroesList/HeroesList';
import MainLayout from '../components/mainLayout/MainLayout';
import { _hash, _ts, apiConstants } from '../src/api/apiConstants';
import { getTransformedData } from '../src/helpers/getTransformedData';

export type ApiResponse = {
  data: {
    results: heroData[];
    total: number;
  };
};

export async function getStaticProps() {
  const res = await fetch(`${apiConstants._apiBase}${apiConstants._baseQuery}&${_ts}&${apiConstants._apiKey}&${_hash}`);
  const response = await res.json();

  return {
    props: {
      data: response.data,
    },
  };
}

const Index = ({ data }: ApiResponse) => {
  const heroesListProps = {
    heroesList: data.results,
    totalHeroes: data.total,
  };

  const heroes = getTransformedData(heroesListProps).heroesList;
  const total = getTransformedData(heroesListProps).totalHeroes;

  return (
    <>
      <MainLayout>
        <HeroesList heroesList={heroes} totalHeroes={total}></HeroesList>
      </MainLayout>
    </>
  );
};

export default Index;
