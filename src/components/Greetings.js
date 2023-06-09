import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const randomGreeting = useSelector((state) => state.greeting);
  return (
    <>
      {randomGreeting.successful ? (
        <h2>{randomGreeting.name.greeting}</h2>
      ) : null}
    </>
  );
};

export default Greetings;
