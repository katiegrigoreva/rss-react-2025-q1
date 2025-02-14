import { useEffect, useState } from 'react';
import './flyout.css';

type FlyoutProps = {
  isVisible: boolean;
  selectedItems: number;
  unselectAll: () => void;
};

export const Flyout = (props: FlyoutProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, [props.selectedItems]);

  return (
    <div className={isVisible && props.isVisible ? 'flyout' : 'flyout__invisible'}>
      <img onClick={onClose} className="flyout__close" src="../../../assets/close-red.png" alt="close" />
      <button className="searchPanel__btn" onClick={props.unselectAll}>
        Unselect all
      </button>
      <p>Total: {props.selectedItems}</p>
      <button className="searchPanel__btn" disabled>
        Download
      </button>
    </div>
  );
};
