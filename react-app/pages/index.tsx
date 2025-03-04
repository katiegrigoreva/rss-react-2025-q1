import { NextPageContext } from 'next';
import { _hash, _ts, apiConstants } from '../api/apiConstants';
import MainLayout from '../components/mainLayout/MainLayout';
import { ApiResponse } from '../components/heroesList/HeroesList';

export async function getServerSideProps({ query }: NextPageContext) {
  const request = query.nameStartsWith
    ? `${apiConstants._apiBase}?nameStartsWith=${query.nameStartsWith}&limit=8&offset=${query.offset}&${_ts}&${apiConstants._apiKey}&${_hash}`
    : `${apiConstants._apiBase}?limit=8&offset=${query.offset}&${_ts}&${apiConstants._apiKey}&${_hash}`;
  const resp = await fetch(request);
  const response = await resp.json();
  return {
    props: {
      data: response.data,
    },
  };
}
const Index = ({ data }: ApiResponse) => {
  return (
    <>
      <MainLayout data={{ data }} />
    </>
  );
};

export default Index;
