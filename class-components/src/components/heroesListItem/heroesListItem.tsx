import { BaseSyntheticEvent } from 'react';
import { heroData } from '../../api/ApiConnector';

type HeroesListItemProps = {
  itemInfo: heroData;
  onCardClick: (e: BaseSyntheticEvent) => void;
};
const HeroesListItem = (props: HeroesListItemProps) => {
  return (
    <li className="hero__item" key={props.itemInfo.name} onClick={props.onCardClick}>
      <img src={props.itemInfo.img} alt={props.itemInfo.name} />
      <div className="hero__name">{props.itemInfo.name}</div>
      <div className="hero__descr">{props.itemInfo.description}</div>
    </li>
  );
};

export default HeroesListItem;
