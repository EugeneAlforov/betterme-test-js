import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testAction } from '../redux/test/test.actions';

export const Test = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAction());
  }, []);

  return <div>test</div>
  
}

export default Test;