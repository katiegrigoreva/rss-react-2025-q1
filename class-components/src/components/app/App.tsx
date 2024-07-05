import { Component } from 'react';
import Header from '../header/Header';
import SearchPanel from '../searchPanel/SearchPanel';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Header>
          <SearchPanel />
        </Header>
      </div>
    );
  }
}
