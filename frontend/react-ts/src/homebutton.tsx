import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link to="/">
        <div className="bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default HomeButton;
