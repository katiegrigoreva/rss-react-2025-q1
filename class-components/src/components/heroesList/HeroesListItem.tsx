import { BaseSyntheticEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { heroData } from '../../api/apiSlice';
import { useAppSelector } from '../../hooks/reduxHooks';
import { RootState } from '../../store';

type HeroesListItemProps = {
  itemInfo: heroData;
  onCardClick: (e: BaseSyntheticEvent) => void;
  onCheckboxClick: (e: BaseSyntheticEvent) => void;
};
const HeroesListItem = (props: HeroesListItemProps) => {
  const context = useContext(ThemeContext);
  const selectedCheckboxes = useAppSelector((state: RootState) => state.heroesReducer.selectedCheckboxes);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
    selectedCheckboxes.forEach((checkbox) => {
      if (checkbox === `${props.itemInfo.id}`) setIsChecked(true);
    });
  }, [selectedCheckboxes]);

  return (
    <li className={`hero__item hero__item_${context.theme}`} key={props.itemInfo.name} onClick={props.onCardClick}>
      <input
        type="checkbox"
        className="checkbox"
        name={`${props.itemInfo.id}`}
        checked={isChecked}
        onChange={props.onCheckboxClick}
      />
      <img src={props.itemInfo.img} alt={props.itemInfo.name} />
      <div className="hero__name">{props.itemInfo.name}</div>
      <div className="hero__descr">{props.itemInfo.description}</div>
    </li>
  );
};

export default HeroesListItem;
