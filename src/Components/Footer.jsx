import React from 'react';
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
   return (
      <footer className="bg-black text-white">
         <section className="container mx-auto flex flex-col lg:flex-row justify-between  items-start gap-4 lg:gap-24 pt-10 px-10 lg:px-0">
            <div className="flex-2">
               <h4 className=" text-xl font-bold">CS--Ticket System</h4>
               <p className="text-sm text-gray-400 mt-3">
                  Customer Support Zone is a modern React-based platform built
                  to simplify customer ticket management. Track progress, update
                  statuses, and resolve issues efficiently through a responsive
                  and user-friendly interface.
               </p>
            </div>
            <div className="flex-1">
               <h4 className="text-sm font-semibold">Company</h4>
               <p className="text-sm text-gray-400 mt-3">About Us</p>
               <p className="text-sm text-gray-400 mt-3">Our Mission</p>
               <p className="text-sm text-gray-400 mt-3">Contact</p>
            </div>
            <div className="flex-1">
               <h4 className="text-sm font-semibold">Services</h4>
               <p className="text-sm text-gray-400 mt-3">
                  Product And Services
               </p>
               <p className="text-sm text-gray-400 mt-3">Customer Stories</p>
               <p className="text-sm text-gray-400 mt-3">Download Apps</p>
            </div>
            <div className="flex-1">
               <h4 className="text-sm font-semibold">Information</h4>
               <p className="text-sm text-gray-400 mt-3">Privacy Policy</p>
               <p className="text-sm text-gray-400 mt-3">
                  Terms and Conditions
               </p>
               <p className="text-sm text-gray-400 mt-3">Join Us</p>
            </div>
            <div className="flex-1">
               <h4 className="text-sm font-semibold">Social Links</h4>
               <div className="mt-3 flex justify-start items-center gap-1.5">
                  <FaSquareXTwitter />
                  <span>@CS — Ticket System</span>
               </div>
               <div className="mt-3 flex justify-start items-center gap-1.5">
                  <FaLinkedin />
                  <a>@CS — Ticket System</a>
               </div>
               <div className="mt-3 flex justify-start items-center gap-1.5">
                  <FaFacebook />
                  <span>@CS — Ticket System</span>
               </div>
               <div className="mt-3 flex justify-start items-center gap-1.5">
                  <MdEmail />
                  <span>@CS — Ticket System</span>
               </div>
            </div>
         </section>
         <section className="footer sm:footer-horizontal footer-center bg-black text-white-content mt-16 p-4 border-t container border-slate-800 mx-auto">
            <aside>
               <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </aside>
         </section>
      </footer>
   );
};

export default Footer;
