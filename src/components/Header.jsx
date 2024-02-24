import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 text-center">
          <span class=" text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/">Employee management System</Link>
          </span>
        </nav>
      </header>
    </>
  );
}

export default Header;
