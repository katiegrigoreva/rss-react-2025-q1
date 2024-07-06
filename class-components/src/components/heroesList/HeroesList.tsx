import { Component } from 'react';
import ApiConnector, { heroData } from '../../api/ApiConnector';
import './heroesList.css';
import Spinner from '../spinner/Spinner';

interface heroesListState {
  heroesList: [heroData] | [];
  loading: boolean;
  error: boolean;
}

class HeroesList extends Component {
  state: heroesListState = {
    heroesList: [],
    loading: true,
    error: false,
  };

  apiConnector = new ApiConnector();

  componentDidMount() {
    this.apiConnector.getAllHeroes().then(this.onListLoaded).catch(this.onError);
  }

  onListLoaded = (heroesList: [heroData]) => {
    this.setState({
      heroesList,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  renderItems(heroesList: [heroData]) {
    const items = heroesList.map((item) => {
      return (
        <li className="hero__item" key={item.name}>
          <img src={item.img} alt={item.name} />
          <div className="hero__name">{item.name}</div>
          <div className="hero__descr">{item.description}</div>
        </li>
      );
    });
    return items;
  }

  render() {
    const { heroesList, loading } = this.state;

    const items = heroesList.length ? this.renderItems(heroesList) : [];
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? items : null;
    return (
      <div className="hero__list">
        {spinner}
        {content}
      </div>
    );
  }
}
export default HeroesList;
