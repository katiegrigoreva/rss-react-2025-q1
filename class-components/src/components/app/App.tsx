import { Component } from 'react';
import Header from '../header/Header';
import SearchPanel from '../searchPanel/SearchPanel';

import './app.css';
import HeroesList from '../heroesList/HeroesList';

export default class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Header>
          <SearchPanel />
        </Header>
        <HeroesList />
      </div>
    );
  }
}
