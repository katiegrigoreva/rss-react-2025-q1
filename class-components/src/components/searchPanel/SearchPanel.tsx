import { ChangeEvent } from 'react';
import './searchPanel.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export type SearchPanelProps = {
  onUpdateSearch: onUpdateSearchType;
};
export type onUpdateSearchType = {
  (arg: string): void;
};

const SearchPanel = (props: SearchPanelProps) => {
  const [term, setTerm] = /* useState(''); */ useLocalStorage('searchTerm', '');

  const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const termValue = e.target.value.trim().toLowerCase();
    setTerm(termValue);
    props.onUpdateSearch(termValue);
  };

  return (
    <input
      type="text"
      className="searchPanel__input"
      placeholder={localStorage.getItem('searchTerm') || 'Search your superhero'}
      value={term}
      onChange={onUpdateSearch}
    />
  );
};

export default SearchPanel;
