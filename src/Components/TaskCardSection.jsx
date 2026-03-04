import { motion } from 'framer-motion';
import { use, useEffect, useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { toast } from 'react-toastify';

const TaskCardSection = ({
   ticketPromise,
   customerTickets,
   setCustomerTickets,
   inProgressCount,
   setInProgressCount,
   setResolvedCount,
   statusTask,
   setStatusTask,
}) => {
   const tickets = use(ticketPromise);

   useEffect(() => {
      setCustomerTickets(tickets);
   }, [tickets, setCustomerTickets]);

   const handleAddStatus = (task) => {
      const isSameTask = statusTask.find((status) => status.id === task.id);

      if (!isSameTask) {
         setStatusTask([...statusTask, task]);
         setInProgressCount(inProgressCount + 1);
         toast.info('Ticket added to In Progress successfully!', {
            autoClose: 2000,
         });
      } else {
         toast.error('This ticket is already in progress!', {
            autoClose: 2000,
         });
      }
   };

   return (
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 mt-4 cursor-pointer">
         {/* Card */}
         {customerTickets.map((ticket) => (
            <motion.div
               onClick={() => handleAddStatus(ticket)}
               key={ticket.id}
               whileTap={{ scale: 0.99 }}
               whileHover={{ scale: 1.02 }}
               className="card rounded-sm bg-base-100 card-md shadow-sm"
            >
               <div className="card-body">
                  <div className="flex justify-between items-center">
                     <h2 className="card-title">{ticket.title}</h2>
                     <div
                        className={`badge badge-success ${(ticket.status === 'Open' && 'bg-green-100') || (ticket.status === 'In- Progress' && 'bg-amber-100')} border-none rounded-full text-black font-medium gap-2 py-4 px-4`}
                     >
                        <span
                           className={`w-3 h-3 rounded-full ${(ticket.status === 'Open' && 'bg-green-500') || (ticket.status === 'In- Progress' && 'bg-amber-400')} `}
                        ></span>
                        {ticket.status}
                     </div>
                  </div>
                  <p className="text-[#627382] text-base">
                     {ticket.description}
                  </p>
                  <div className="flex justify-between items-start mt-2.5">
                     <div className="flex justify-start gap-3">
                        <span className="text-[#627382]">{ticket.id}</span>
                        <span
                           className={`uppercase font-medium ${(ticket.priority === 'HIGH PRIORITY' && 'text-red-400') || (ticket.priority === 'MEDIUM PRIORITY' && 'text-amber-400') || (ticket.priority === 'LOW PRIORITY' && 'text-green-500')}`}
                        >
                           {ticket.priority}
                        </span>
                     </div>
                     <div className="flex justify-start  gap-3">
                        <span className="text-[#627382]">
                           {ticket.customer}
                        </span>
                        <div className="flex items-center gap-1">
                           <MdOutlineDateRange className="text-lg" />
                           <span className="uppercase text-[#627382]">
                              {ticket.createdAt}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
   );
};

export default TaskCardSection;
