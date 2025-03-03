import { NextPageContext } from 'next';
import HeroesList, { heroData } from '../components/heroesList/HeroesList';
import MainLayout from '../components/mainLayout/MainLayout';
import { _hash, _ts, apiConstants } from '../api/apiConstants';

type ApiResp = {
  data: {
    results: heroData[];
    total: number;
  };
  theme: string;
};

export async function getServerSideProps({ query }: NextPageContext) {
  const resp = await fetch(
    `${apiConstants._apiBase}?limit=8&offset=${query.offset}&${_ts}&${apiConstants._apiKey}&${_hash}`
  );
  const response = await resp.json();
  return {
    props: {
      data: response.data,
    },
  };
}

const Index = ({ data }: ApiResp) => {
  return (
    <>
      <MainLayout>
        <HeroesList data={{ data }} />
      </MainLayout>
    </>
  );
};

export default Index;
