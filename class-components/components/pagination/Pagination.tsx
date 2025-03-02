import Link from 'next/link';
import styles from './pagination.module.css';
import { useRouter } from 'next/router';

type paginationProps = {
  totalHeroes: number;
};

const Pagination = ({ totalHeroes }: paginationProps) => {
  const pageNumbers = [];
  const heroesPerPage: number = 8;
  const router = useRouter();
  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i += 1) {
    pageNumbers.push(i);
  }
  console.log(router);

  return (
    <ul className={styles.pagination} role="pagination">
      {pageNumbers.map((pageNum, i) => {
        const active =
          router.query.offset === `${heroesPerPage * i}` ||
          router.asPath === `/details/${router.query.id}?limit=8&offset=${heroesPerPage * i}`
            ? styles.active
            : '';
        return (
          <li className={styles.pagination__item} key={pageNum}>
            <Link href={`/?limit=8&offset=${heroesPerPage * i}`} className={`${styles.pagination__link} ${active}`}>
              {pageNum}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
