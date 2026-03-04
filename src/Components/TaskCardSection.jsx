import { motion } from 'framer-motion';
import { use } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';

const TaskCardSection = ({ ticketPromise }) => {
   const tickets = use(ticketPromise);
   console.log(tickets);
   return (
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 mt-4 cursor-pointer">
         {/* Card */}
         {tickets.map((ticket) => (
            <motion.div
               key={ticket.id}
               whileTap={{ scale: 0.99 }}
               whileHover={{ scale: 1.02 }}
               className="card rounded-sm bg-base-100 card-md shadow-sm "
            >
               <div className="card-body">
                  <div className="flex justify-between items-center">
                     <h2 className="card-title">{ticket.title}</h2>
                     <div
                        class={`badge badge-success ${(ticket.status === 'Open' && 'bg-green-100') || (ticket.status === 'In- Progress' && 'bg-amber-100')} border-none rounded-full text-black font-medium gap-2 py-4 px-4`}
                     >
                        <span
                           class={`w-3 h-3 rounded-full ${(ticket.status === 'Open' && 'bg-green-500') || (ticket.status === 'In- Progress' && 'bg-amber-400')} `}
                        ></span>
                        {ticket.status}
                     </div>
                  </div>
                  <p className="text-[#627382] text-base">
                     {ticket.description}
                  </p>
                  <div className="flex justify-between items-start">
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
