import { BaseSyntheticEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../src/context/ThemeContext';
import { heroData } from '../../src/api/apiSlice';
import { useAppSelector } from '../../src/hooks/reduxHooks';
import { RootState } from '../../src/store';
import styles from '../heroesList/heroesList.module.css';
import Image from 'next/image';

type HeroesListItemProps = {
  itemInfo: heroData;
  onCardClick: (e: BaseSyntheticEvent) => void;
  onCheckboxClick: (e: BaseSyntheticEvent) => void;
};
const HeroesListItem = (props: HeroesListItemProps) => {
  const context = useContext(ThemeContext);
  const selectedCheckboxes = useAppSelector((state: RootState) => state.heroesReducer.selectedCheckboxes);
  const [isChecked, setIsChecked] = useState(false);
  const dark = context.theme === 'dark' ? styles.dark : '';

  useEffect(() => {
    setIsChecked(false);
    selectedCheckboxes.forEach((checkbox) => {
      if (checkbox === `${props.itemInfo.id}`) setIsChecked(true);
    });
  }, [selectedCheckboxes]);

  return (
    <li className={`${styles.hero__item} ${dark}`} key={props.itemInfo.name} onClick={props.onCardClick}>
      <input
        type="checkbox"
        className={styles.checkbox}
        name={`${props.itemInfo.id}`}
        checked={isChecked}
        onChange={props.onCheckboxClick}
      />
      <Image priority={true} src={props.itemInfo.img} alt={props.itemInfo.name} width={100} height={100} />
      <div className={styles.hero__name}>{props.itemInfo.name}</div>
      <div className={styles.hero__descr}>{props.itemInfo.description}</div>
    </li>
  );
};

export default HeroesListItem;
