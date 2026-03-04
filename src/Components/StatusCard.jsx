import React from 'react';
import { toast } from 'react-toastify';

const StatusCard = ({
   status,
   resolvedTask,
   setResolveTask,
   setStatusTask,
   statusTask,
   inProgressCount,
   setInProgressCount,
   resolvedCount,
   setResolvedCount,
   customerTickets,
   setCustomerTickets,
}) => {
   const handleComplete = (completeTask) => {
      const remainingStatusTask = statusTask.filter(
         (inProgTask) => inProgTask.id !== completeTask.id
      );
      setStatusTask(remainingStatusTask);
      setResolveTask([...resolvedTask, completeTask]);
      setInProgressCount(inProgressCount - 1);
      setResolvedCount(resolvedCount + 1);

      const remainingCustomerTicket = customerTickets.filter(
         (customerTicket) => customerTicket.id !== completeTask.id
      );
      setCustomerTickets(remainingCustomerTicket);
      toast.success('Ticket marked as resolved!', { autoClose: 2000 });
   };

   return (
      <div className="card w-full bg-base-100 rounded-sm card-xs shadow-sm mt-4">
         <div className="card-body p-4">
            <h2 className="mb-2 card-title text-[#001931] text-sm">
               {status.title}
            </h2>

            <button
               onClick={() => handleComplete(status)}
               className="btn bg-[#02A53B] text-white"
            >
               Complete
            </button>
         </div>
      </div>
   );
};

export default StatusCard;
