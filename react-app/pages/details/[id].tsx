import { NextPageContext } from 'next';
import { heroData } from '../../components/heroesList/HeroesList';
import { _hash, _ts, apiConstants } from '../../api/apiConstants';
import { transformHeroData } from '../../helpers/getTransformedData';
import HeroInfo from '../../components/heroInfo/HeroInfo';
import MainLayout from '../../components/mainLayout/MainLayout';

export type ApiResponse = {
  data: {
    results: heroData[];
    total: number;
  };
  detailedData: {
    results: heroData[];
    total: number;
  };
};

export async function getServerSideProps({ query }: NextPageContext) {
  const offset = query.id?.slice(-2);
  const id = query.id?.slice(0, -2);
  const detailedRes = await fetch(`${apiConstants._apiBase}/${id}?${_ts}&${apiConstants._apiKey}&${_hash}`);
  const mainRes = await fetch(
    `${apiConstants._apiBase}?limit=8&offset=${offset}&${_ts}&${apiConstants._apiKey}&${_hash}`
  );
  const response = await detailedRes.json();
  const mainResponse = await mainRes.json();

  return {
    props: {
      detailedData: response.data,
      data: mainResponse.data,
    },
  };
}

const Details = ({ data, detailedData }: ApiResponse) => {
  return (
    <>
      <MainLayout data={{ data }}>
        <HeroInfo heroInfo={transformHeroData(detailedData.results[0])} />
      </MainLayout>
    </>
  );
};

export default Details;
