import { Link } from 'react-router-dom';
import './pagination.css';

type paginationProps = {
  totalHeroes: number;
};

const Pagination = ({ totalHeroes }: paginationProps) => {
  const pageNumbers = [];
  const heroesPerPage: number = 8;
  const offset = new URLSearchParams(location.search).get('offset');
  const offsetToUse = offset ? offset : '0';

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination" role="pagination">
      {pageNumbers.map((pageNum, i) => (
        <li className="pagination__item" key={pageNum}>
          <Link
            to={`?limit=8&offset=${heroesPerPage * i}`}
            className={`pagination__link ${offsetToUse === (heroesPerPage * i).toString() ? 'active' : ''}`}
          >
            {pageNum}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
