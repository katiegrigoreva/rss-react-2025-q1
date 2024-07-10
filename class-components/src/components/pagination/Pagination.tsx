import './pagination.css';

type paginationProps = {
  heroesPerPage: number;
  totalHeroes: number;
  onChangePage: (arg: number) => void;
};

const Pagination = ({ heroesPerPage, totalHeroes, onChangePage }: paginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((page) => (
        <li className="pagination__item" key={page}>
          <a
            href="#"
            className="pagination__link"
            onClick={() => {
              onChangePage(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
