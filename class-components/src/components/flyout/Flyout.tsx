import { useEffect, useState } from 'react';
import './flyout.css';
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

  return (
    <div className={selectedHeroes.length && isVisible ? 'flyout' : 'flyout__invisible'}>
      <img onClick={onClose} className="flyout__close" src="../../../assets/close-red.png" alt="close" />
      <button className="searchPanel__btn" onClick={onUnselectAll}>
        Unselect all
      </button>
      <p>Total: {selectedHeroes.length}</p>
      <button className="searchPanel__btn" disabled>
        Download
      </button>
    </div>
  );
};
