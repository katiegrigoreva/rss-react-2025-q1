import Link from 'next/link';
import Image from 'next/image';
import Img from '../public/404.webp';
import styles from '../styles/error.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <Image priority={true} className={styles.image} width={Img.width} height={Img.height} src={Img} alt="Error" />
      <button className={styles.button}>
        <Link className={styles.link} href="/">
          Go home
        </Link>
      </button>
    </div>
  );
};
export default NotFoundPage;
