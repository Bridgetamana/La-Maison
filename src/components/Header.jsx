import React, { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
        <nav className=" lg:px-24 lg:py-4 px-6 bg-sky-100 shadow-md flex flex-wrap items-center py-2">
            <div className="flex-1 flex justify-between items-center">
                <a className="mt-3 text-black font-bold ">La Maison</a>
            </div>
            <label
            htmlFor="menu-toggle"
            className="cursor-pointer lg:hidden block"
            onClick={handleMenuToggle}
            >   
                <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            {isMenuOpen && (
            <div className="lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <ul className="text-xl text-center items-center gap-x-6 lg:gap-x-20 pt-4 lg:text-lg lg:flex lg:pt-0">
                    <li className="py-2 lg:py-0 ">
                        <a
                        className="text-slate-600 focus:text-black focus:font-semibold focus:border-b-4 focus:pb-2 focus:border-blue-900 hover:pb-2 hover:border-b-4 hover:border-blue-900"
                        href="#">
                            Home
                        </a>                    
                    </li>
                    <li class="py-2 lg:py-0 ">
                        <a
                            class="text-slate-600 focus:text-black focus:font-semibold hover:pb-2 hover:border-b-4 hover:border-blue-900"
                            href="#"
                        >
                            About Us
                        </a>
                    </li>
                    <li class="py-2 lg:py-0 ">
                        <a
                        class="text-slate-600 focus:text-black focus:font-semibold hover:pb-2 hover:border-b-4 hover:border-blue-900"
                        href="#"
                        >
                            Properties
                        </a>
                    </li>
                    <li class="py-2 lg:py-0 ">
                        <a
                        class="text-slate-600 focus:text-black focus:font-semibold hover:pb-2 hover:border-b-4 hover:border-blue-900 "
                        href="#"
                        >
                            Agents
                        </a>
                    </li>
                    <li class="py-2 lg:py-0">
                        <a
                        class="text-slate-600 focus:text-black focus:font-semibold hover:border-blue-900 border-2 p-2 border-black"
                        href="#"
                        >
                            Find A House
                        </a>
                    </li>
                </ul>
            </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
