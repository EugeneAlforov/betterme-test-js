import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testAction } from '../redux/test/test.actions';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAction());
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Main;