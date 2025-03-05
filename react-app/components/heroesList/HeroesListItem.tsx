import { BaseSyntheticEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { heroData } from './HeroesList';
import { useAppSelector } from '../../hooks/reduxHooks';
import { RootState } from '../../store';
import styles from '../heroesList/heroesList.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

type HeroesListItemProps = {
  itemInfo: heroData;
  onCheckboxClick: (e: BaseSyntheticEvent) => void;
};
const HeroesListItem = (props: HeroesListItemProps) => {
  const context = useContext(ThemeContext);
  const selectedCheckboxes = useAppSelector((state: RootState) => state.heroesReducer.selectedCheckboxes);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const dark = context.theme === 'dark' ? styles.dark : '';
  const offset = useSearchParams().get('offset');
  const nameStartsWith = useSearchParams().get('nameStartsWith');
  const searchParamsString = nameStartsWith
    ? `/details/${props.itemInfo.id}?nameStartsWith=${nameStartsWith}&limit=8&offset=${offset}`
    : `/details/${props.itemInfo.id}?limit=8&offset=${offset}`;
  const searchParamshref = nameStartsWith
    ? `/details/[id]?nameStartsWith=${nameStartsWith}&limit=8&offset=${offset}`
    : `/details/[id]?limit=8&offset=${offset}`;

  useEffect(() => {
    setIsChecked(false);
    selectedCheckboxes.forEach((checkbox) => {
      if (checkbox === `${props.itemInfo.id}`) setIsChecked(true);
    });
  }, [selectedCheckboxes]);

  return (
    <li className={`${styles.hero__item} ${dark}`} key={props.itemInfo.name}>
      <input
        type="checkbox"
        className={styles.checkbox}
        name={`${props.itemInfo.id}`}
        checked={isChecked}
        onChange={props.onCheckboxClick}
      />
      <Link
        className={styles.hero__item}
        href={searchParamshref}
        as={searchParamsString}
        onClick={(e) => {
          if (router.asPath.includes('details')) {
            e.preventDefault();
          }
        }}
      >
        <img src={props.itemInfo.img} alt={props.itemInfo.name} width={100} height={100} />
        <div className={styles.hero__name}>{props.itemInfo.name}</div>
        <div className={styles.hero__descr}>{props.itemInfo.description}</div>
      </Link>
    </li>
  );
};

export default HeroesListItem;
