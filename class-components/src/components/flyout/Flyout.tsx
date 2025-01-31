import './flyout.css';
type FlyoutProps = {
  selectedItems: number;
};

const onClose = () => {};

export const Flyout = (props: FlyoutProps) => {
  return (
    <div className="flyout">
      <img onClick={onClose} className="flyout__close" src="../../../assets/close-red.png" alt="close" />
      <button className="searchPanel__btn">Unselect all</button>
      <p>Total: {props.selectedItems}</p>
      <button className="searchPanel__btn" disabled>
        Download
      </button>
    </div>
  );
};
