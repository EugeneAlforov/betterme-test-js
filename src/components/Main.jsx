import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testAction } from '../redux/test/test.actions';
import Container from './Container/Container';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAction());
  }, []);

  return (
    <div>
      <Container />
    </div>
  )
}

export default Main;

