import { BaseSyntheticEvent, useState } from 'react';
import './controlPanel.css';
import { useNavigate } from 'react-router';

const ControlPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isNameUp, setIsNameUp] = useState(true);
  const [isPopulationUp, setIsPopulationUp] = useState(true);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const toggleNameSort = (current: boolean) => {
    if (current === true) {
      setIsNameUp(false);
      searchParams.set('sortName', 'Down');
    } else {
      setIsNameUp(true);
      searchParams.set('sortName', 'Up');
    }
    navigate(`/?${searchParams}`);
  };

  const togglePopulationSort = (current: boolean) => {
    if (current === true) {
      setIsPopulationUp(false);
      searchParams.set('sortPopulation', 'Down');
    } else {
      setIsPopulationUp(true);
      searchParams.set('sortPopulation', 'Up');
    }
    navigate(`/?${searchParams}`);
  };

  return (
    <div className="controlPanel">
      <form className="searchForm">
        <input
          className="textbox"
          type="search"
          placeholder="Search within country name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value.trim().toLowerCase())}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={(e) => {
            e.preventDefault();
            searchParams.set('search', `${searchTerm}`);
            navigate(`/?${searchParams}`);
          }}
        >
          Search
        </button>
      </form>
      <p>Region:</p>
      <select
        className="searchButton"
        onChange={(e: BaseSyntheticEvent) => {
          searchParams.set('region', `${e.target.value}`);
          navigate(`/?${searchParams}`);
        }}
      >
        <option value="All">All</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
      <p>Sort by:</p>
      <button className="searchButton" onClick={() => toggleNameSort(isNameUp)}>
        {isNameUp ? '↑ name' : '↓ name'}
      </button>
      <button className="searchButton" onClick={() => togglePopulationSort(isPopulationUp)}>
        {isPopulationUp ? '↑ population' : '↓ population'}
      </button>
    </div>
  );
};

export default ControlPanel;
