import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
      <div className="block md:max-w-lg">
        <img src="https://flowbite-admin-dashboard.vercel.app/images/illustrations/404.svg" alt="astronaut" />
      </div>
      <div className="text-center xl:max-w-4xl">
        <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Page not found
        </h1>
        <Link
        to="/"
        className="mt-5 inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
