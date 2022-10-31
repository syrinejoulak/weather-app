import React from 'react';

import { BiErrorAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/slices/modal';
import { RootState } from '../../../redux/store';

import './ErrorModal.scss';

const ErrorModal = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(
    (state: RootState) => state.modal.errorMessage
  );

  const onCloseModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div className="error-modal">
      <div className="error-modal-bg" onClick={onCloseModalHandler}></div>
      <div className="error-modal__container">
        <div>
          <BiErrorAlt className="icon" />
          <h2>Oups...</h2>
          <p>{errorMessage}</p>
          <p>To dismiss click the button below</p>
        </div>
        <button onClick={onCloseModalHandler}>Dismiss</button>
      </div>
    </div>
  );
};

export default ErrorModal;
