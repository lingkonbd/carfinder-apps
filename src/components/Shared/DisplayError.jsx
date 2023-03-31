import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();

    return (
        <div>
            <h2 className='text-red-500'>Something went wrong</h2>
            <p className='text-red-400'>
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default DisplayError;