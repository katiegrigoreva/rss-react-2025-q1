import { Component } from 'react';

import './searchPanel.css';

class SearchPanel extends Component {
  render() {
    return (
      <div className="searchPanel">
        <input type="text" className="searchPanel__input" placeholder="Search your superhero" />
        <button className="searchPanel__btn">Enter</button>
      </div>
    );
  }
}

export default SearchPanel;
