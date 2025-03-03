import { NextPageContext } from 'next';
import HeroesList, { heroData } from '../../components/heroesList/HeroesList';
import MainLayout from '../../components/mainLayout/MainLayout';
import { _hash, _ts, apiConstants } from '../../api/apiConstants';
import { transformHeroData } from '../../helpers/getTransformedData';
import HeroInfo from '../../components/heroInfo/HeroInfo';

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
  const detailedRes = await fetch(`${apiConstants._apiBase}/${query.id}?${_ts}&${apiConstants._apiKey}&${_hash}`);
  const mainRes = await fetch(
    `${apiConstants._apiBase}?limit=8&offset=${query.offset}&${_ts}&${apiConstants._apiKey}&${_hash}`
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
      <MainLayout>
        <HeroesList data={{ data }}>
          <HeroInfo heroInfo={transformHeroData(detailedData.results[0])} />
        </HeroesList>
      </MainLayout>
    </>
  );
};

export default Details;
