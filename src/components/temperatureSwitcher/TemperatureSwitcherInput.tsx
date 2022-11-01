import React from 'react';

import { useDispatch } from 'react-redux';
import { setTemperatureScale } from '../../redux/slices/weather';

const TemperatureSwitcherInput = () => {
  const dispatch = useDispatch();

  const onHandleCheck = () => {
    dispatch(setTemperatureScale());
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      data-testid="checkbox-temp"
      onChange={onHandleCheck}
    />
  );
};

export default TemperatureSwitcherInput;
