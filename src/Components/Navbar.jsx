import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
   return (
      <div className="border-b border-slate-100 bg-white">
         <div className="navbar  container mx-auto ">
            <div className="flex-1">
               <p className="text-[#130B2D] text-xl font-bold">
                  CS--Ticket System
               </p>
            </div>
            <div className="flex-none flex items-center gap-4">
               <ul className="menu menu-horizontal px-1 hidden lg:flex">
                  <li>
                     <a>Home</a>
                  </li>
                  <li>
                     <a>FaQ</a>
                  </li>
                  <li>
                     <a>Changelog</a>
                  </li>
                  <li>
                     <a>Blog</a>
                  </li>
                  <li>
                     <a>Download</a>
                  </li>
                  <li>
                     <a>Contact</a>
                  </li>
               </ul>

               <details className="dropdown lg:hidden">
                  <summary className="btn m-1">Menu</summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                     <li>
                        <a>Home</a>
                     </li>
                     <li>
                        <a>FaQ</a>
                     </li>
                     <li>
                        <a>Changelog</a>
                     </li>
                     <li>
                        <a>Blog</a>
                     </li>
                     <li>
                        <a>Download</a>
                     </li>
                     <li>
                        <a>Contact</a>
                     </li>
                  </ul>
               </details>

               <button className="btn text-white bg-linear-to-r from-[#642fe3] to-[#9f62f2]">
                  <FaPlus /> New Ticket
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
