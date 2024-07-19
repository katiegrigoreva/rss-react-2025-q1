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
      {pageNumbers.map((pageNum) => (
        <li className="pagination__item" key={pageNum}>
          <a
            className="pagination__link"
            onClick={() => {
              onChangePage(pageNum);
            }}
          >
            {pageNum}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
