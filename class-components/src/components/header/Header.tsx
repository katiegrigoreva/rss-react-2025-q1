import { Component } from 'react';
import SearchPanel from '../searchPanel/SearchPanel';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">MARVEL HEROES</h1>
        <SearchPanel />
      </header>
    );
  }
}

export default Header;
