import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsAction } from '../../../store/reducers/productsReducer';
import s from './index.module.css';

export default function FilterForm() {
  const dispatch = useDispatch();



  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');


  const handleMinChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxValue(e.target.value);
  };


  useEffect(() => {
    dispatch(filterProductsAction({ min_value: minValue||0, max_value: maxValue||Infinity }));
  }, [dispatch, minValue, maxValue]);

  return (
    <form className={s.filter}>
      <p>Price:</p>
      <input
        type="number"
        placeholder="min"
        name="min"
        value={minValue}
        onChange={handleMinChange}
      />
      <input
        type="number"
        placeholder="max"
        name="max"
        value={maxValue}
        onChange={handleMaxChange}
      />
    </form>
  );
}

