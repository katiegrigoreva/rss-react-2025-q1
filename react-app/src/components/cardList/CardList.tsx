import { memo } from 'react';
import { CountryData } from '../../api/ApiConnector';
import './cardList.css';

type CardListType = {
  cardList: CountryData[];
};
type ItemType = {
  item: CountryData;
};

const Item = memo(function Item(props: ItemType) {
  return (
    <li key={props.item.name.official} className="cardList__item">
      <img src={props.item.flags.png} alt={props.item.name.common} />
      <p>{`${props.item.name.common} - population: ${props.item.population}; region: ${props.item.region}`}</p>
    </li>
  );
});

const CardList = (props: CardListType) => {
  function renderItems(arr: CountryData[]) {
    const items = arr.map((item) => <Item item={item} key={item.name.official} />);
    return items.length !== 0 ? items : <h3>There is no country with such name</h3>;
  }

  const items = renderItems(props.cardList);

  return (
    <>
      <ul className="cardList">{items}</ul>
    </>
  );
};
export default CardList;
