import { useState, useEffect } from 'react';
import './heroInfo.css';
import ApiConnector, { heroData } from '../../api/ApiConnector';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

type HeroeIdProp = {
  heroId: number;
};

const HeroInfo = (heroIdProp: HeroeIdProp) => {
  const [showComponent, setShowComponent] = useState(true);
  const [heroInfo, setHeroInfo] = useState<heroData>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiConnector = new ApiConnector();

  useEffect(() => {
    return () => {
      <></>;
    };
  }, []);

  useEffect(() => {
    apiConnector
      .getHeroInfo(heroIdProp.heroId)
      .then(onInfoLoaded)
      .catch(onError)
      .finally(() => setLoading(false));
  }, [heroIdProp.heroId]);

  const onClose = () => {
    setShowComponent(false);
  };

  const onError = () => {
    setError(true);
  };

  const onInfoLoaded = (data: heroData) => {
    window.scrollTo(0, 0);
    setHeroInfo(() => data);
  };

  const errorMsg = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  console.log(heroIdProp.heroId);

  return (
    <>
      {showComponent ? (
        <div className="heroInfo">
          {spinner}
          {errorMsg}
          <img className="heroInfo__close" src="../../../assets/close.png" alt="close" onClick={onClose} />
          <img className="heroInfo__img" src={heroInfo?.img} alt={heroInfo?.name} />
          <div>
            <div className="heroInfo__name">
              NAME:<br></br> {heroInfo?.name}
            </div>
            <div className="heroInfo__descr">
              <b>DESCRIPTION:</b>
              <br></br>
              {heroInfo?.description}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeroInfo;
