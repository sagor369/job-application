import React from 'react';
import { useRouteError } from 'react-router-dom';

const Erorr = () => {
    const error = useRouteError()

    return (
        <div className='text-2xl m-auto text-neutral-500  '>
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
          Go ahead and email {error.data.hrEmail} if you
          feel like this is a mistake.
        </p>
      </div>
    );
};

export default Erorr;