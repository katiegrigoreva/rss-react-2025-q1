import { useEffect, useState } from 'react';
import styles from './flyout.module.css';
import search from '../controlPanel/controlPanel.module.css';
import { useAppSelector } from '../../hooks/reduxHooks';
import { RootState } from '../../store/index';
import { useDispatch } from 'react-redux';
import { unselectAll } from '../../slices/heroesListSlice';

export const Flyout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const selectedHeroes = useAppSelector((state: RootState) => state.heroesReducer.selectedHeroes);

  useEffect(() => {
    setIsVisible(true);
  }, [selectedHeroes]);

  const onClose = () => {
    setIsVisible(false);
  };

  const onUnselectAll = () => {
    dispatch(unselectAll());
  };

  const getURL = () => {
    if (selectedHeroes.length !== 0) {
      const headers = Object.keys(selectedHeroes[0]).toString();
      const info = selectedHeroes?.map((item) => {
        return Object.values(item).toString();
      });
      const dataToSave = [headers, ...info].join('\n');
      const blob = new Blob([dataToSave], { type: 'application/csv' });
      const url = URL.createObjectURL(blob);
      return url;
    }
  };

  return (
    <div className={selectedHeroes.length && isVisible ? styles.flyout : styles.flyout__invisible}>
      <img onClick={onClose} className={styles.flyout__close} src="../close-red.png" alt="close" />
      <button className={search.button} onClick={onUnselectAll}>
        Unselect all
      </button>
      <p>Total: {selectedHeroes.length}</p>
      <button className={search.button} disabled>
        <a href={getURL()} download={`${selectedHeroes.length}_marvelHeroes.csv`}>
          Download
        </a>
      </button>
    </div>
  );
};
