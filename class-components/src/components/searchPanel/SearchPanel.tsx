import { ChangeEvent, useState } from 'react';
import './searchPanel.css';
import { AppProps } from '../app/App';

const SearchPanel = (props: AppProps) => {
  const [term, setTerm] = useState('');

  const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const termValue = e.target.value.trim().toLowerCase();
    setTerm(termValue);
    props.onUpdateSearch(termValue);
  };

  return (
    <input
      type="text"
      className="searchPanel__input"
      placeholder="Search your superhero"
      value={term}
      onChange={onUpdateSearch}
    />
  );
};

export default SearchPanel;
