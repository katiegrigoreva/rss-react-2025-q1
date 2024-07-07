import { ChangeEvent, Component } from 'react';
import './searchPanel.css';
import ApiConnector from '../../api/ApiConnector';

export type SearchPanelProps = {
  onUpdateSearch: onUpdateSearchType;
};

export type onUpdateSearchType = {
  (arg: string): void;
};

class SearchPanel extends Component<SearchPanelProps, { term: string }> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {
      term: '',
    };
  }

  apiConnector = new ApiConnector();

  onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="searchPanel__input"
        placeholder="Search your superhero"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
