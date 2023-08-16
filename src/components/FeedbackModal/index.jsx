import errorIcon from '../../assets/close-circle-outline.svg';
import successIcon from '../../assets/checkmark-circle-outline.svg';
import './index.css';

export const FeedbackModal = (props) => {
  const { success, message, modalController, resetForm } = props;

  return (
    <div
      className={`modal-overlay modal-overlay--${modalController.getter ? 'shown' : 'hidden'}`}
      onClick={() => {
        modalController.setter(false);
        resetForm();
      }}
    >
      <div className="feedback-modal">
        <h3 className="feedback-modal__title">
          <img
            className="feedback-modal__title__icon"
            alt={success ? 'success' : 'error'}
            src={success ? successIcon : errorIcon}
          />
          {success ? 'Employee created' : 'Something went wrong'}
        </h3>
        <p className="feedback-modal__text">{message}</p>
        <button className="feedback-modal__validate" type="button">
          OK
        </button>
      </div>
    </div>
  );
};
