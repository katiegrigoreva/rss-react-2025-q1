import Link from 'next/link';
import styles from './pagination.module.css';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

type paginationProps = {
  totalHeroes: number;
};

const Pagination = ({ totalHeroes }: paginationProps) => {
  const pageNumbers = [];
  const heroesPerPage: number = 8;
  const router = useRouter();
  const searchTerm = useSearchParams().get('nameStartsWith');

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <ul className={styles.pagination} role="pagination">
      {pageNumbers.map((pageNum, i) => {
        const offset = heroesPerPage * i;
        const active =
          router.query.offset === `${offset}` ||
          router.asPath === `/details/${router.query.id}?limit=8&offset=${offset}`
            ? styles.active
            : '';
        return (
          <li className={styles.pagination__item} key={pageNum}>
            <Link
              href={
                searchTerm ? `/?nameStartsWith=${searchTerm}&limit=8&offset=${offset}` : `/?limit=8&offset=${offset}`
              }
              className={`${styles.pagination__link} ${active}`}
            >
              {pageNum}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
