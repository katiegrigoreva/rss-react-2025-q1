import { CountryData } from '../../api/ApiConnector';
import './cardList.css';

type CardList = {
  cardList: CountryData[];
};

const CardList = (props: CardList) => {
  function renderItems(arr: CountryData[]) {
    const items = arr.map((item) => {
      return (
        <li key={item.name.official} className="cardList__item">
          <img src={item.flags.png} alt={item.name.common} />
          <p>{`${item.name.common} - population: ${item.population}; region: ${item.region}`}</p>
        </li>
      );
    });
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
