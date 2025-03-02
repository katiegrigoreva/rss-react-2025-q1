import { useContext } from 'react';
import styles from './heroInfo.module.css';
import { ThemeContext } from '../../src/context/ThemeContext';
import { heroData } from '../heroesList/HeroesList';
import Image from 'next/image';

interface HeroInfo {
  heroInfo: heroData;
}

const HeroInfo = (props: HeroInfo) => {
  const context = useContext(ThemeContext);
  const dark = context.theme === 'dark' ? styles.dark : '';

  return (
    <div className={`${styles.heroInfo} ${dark}`} role="cardInfo">
      <button onClick={() => {}}>
        <Image
          priority={true}
          width={100}
          height={100}
          className={styles.heroInfo__close}
          src="../close-red.png"
          alt="close"
          role="closeBtn"
        />
      </button>
      <img className={styles.heroInfo__img} src={props.heroInfo?.img} alt={props.heroInfo?.name} />
      <div>
        <div className={styles.heroInfo__name}>
          NAME:<br></br> {props.heroInfo?.name}
        </div>
        <div className={styles.heroInfo__descr}>
          <b>DESCRIPTION:</b>
          <br></br>
          {props.heroInfo?.description}
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
