import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='items-center justify-center px-5 mx-auto my-8'>

            <div className='max-w-md text-center'>

                <p className='text-4xl font-extrabold md:text-3xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn btn-warning'>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;