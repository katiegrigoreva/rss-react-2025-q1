import { Component } from 'react';
import Header from '../header/Header';
import SearchPanel, { SearchPanelProps } from '../searchPanel/SearchPanel';

import './app.css';
import '../searchPanel/searchPanel.css';
import HeroesList from '../heroesList/HeroesList';
import ApiConnector, { heroData } from '../../api/ApiConnector';

type StateType = {
  term: string;
  heroesList: [heroData] | [];
};

export default class App extends Component<SearchPanelProps, StateType> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {
      term: '',
      heroesList: [],
    };
  }

  apiConnector = new ApiConnector();

  onUpdateSearch = (term: string) => {
    this.setState({ term });
  };

  getSearchData = () => {
    return this.apiConnector
      .getSearchData(this.state.term)
      .then(this.onUpdateHeroesList)
      .catch(() => {
        throw new Error('Ooooops');
      });
  };

  onUpdateHeroesList = (heroesList: [heroData]) => {
    this.setState({
      heroesList,
    });
  };

  render() {
    return (
      <div className="appContainer">
        <Header />
        <div className="searchPanel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <button className="searchPanel__btn" onClick={this.getSearchData}>
            Search
          </button>
        </div>

        <HeroesList heroesList={this.state.heroesList} />
      </div>
    );
  }
}
