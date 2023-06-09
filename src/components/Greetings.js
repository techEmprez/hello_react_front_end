import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greeting/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.name);
  const loading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  if (loading) {
    return (
      <div> Loading... </div>
    );
  }

  return (
    <div>
      <h1>{randomGreeting.greeting}</h1>
    </div>
  );
};

export default Greetings;
