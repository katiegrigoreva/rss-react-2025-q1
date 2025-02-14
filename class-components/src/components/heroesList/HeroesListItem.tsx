import { BaseSyntheticEvent, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { heroData } from '../../api/apiSlice';

type HeroesListItemProps = {
  itemInfo: heroData;
  onCardClick: (e: BaseSyntheticEvent) => void;
  onCheckboxClick: (e: BaseSyntheticEvent) => void;
};
const HeroesListItem = (props: HeroesListItemProps) => {
  const context = useContext(ThemeContext);
  return (
    <li className={`hero__item hero__item_${context.theme}`} key={props.itemInfo.name} onClick={props.onCardClick}>
      <input
        type="checkbox"
        className="checkbox"
        name={`tab-${props.itemInfo.id}`}
        defaultChecked={false}
        onChange={props.onCheckboxClick}
      />
      <img src={props.itemInfo.img} alt={props.itemInfo.name} />
      <div className="hero__name">{props.itemInfo.name}</div>
      <div className="hero__descr">{props.itemInfo.description}</div>
    </li>
  );
};

export default HeroesListItem;
