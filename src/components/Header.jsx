import{ useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-sky-100 shadow-sm fixed w-full z-20 top-0 left-0 ">
        <div className=" flex flex-wrap items-center justify-between px-4 py-4  md:px-10 lg:px-24">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-bold whitespace-nowrap">
              La Maison
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 text-black border-2 border-black"
            ><a href={`/`}>
              Find A House</a>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle} 
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0">
              <li>
                <Link to={`/`}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/about`}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to={`/properties`}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Agents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
