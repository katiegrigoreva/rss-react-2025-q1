import { NextPageContext } from 'next';
import HeroesList, { heroData } from '../components/heroesList/HeroesList';
import MainLayout from '../components/mainLayout/MainLayout';
import Pagination from '../components/pagination/Pagination';
import { _hash, _ts, apiConstants } from '../src/api/apiConstants';
import { getTransformedData } from '../src/helpers/getTransformedData';

export type ApiResponse = {
  data: {
    results: heroData[];
    total: number;
  };
};

export async function getServerSideProps({ query }: NextPageContext) {
  const res = await fetch(
    `${apiConstants._apiBase}?limit=8&offset=${query.offset}&${_ts}&${apiConstants._apiKey}&${_hash}`
  );
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
        <Pagination totalHeroes={total} />
      </MainLayout>
    </>
  );
};

export default Index;
