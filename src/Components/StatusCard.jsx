import React from 'react';

const StatusCard = () => {
   return (
      <div className="card w-full bg-base-100 card-xs shadow-sm mt-4">
         <div className="card-body p-4">
            <p className="mb-2 text-[#001931] text-sm">Xsmall Card</p>

            <button className="btn bg-[#02A53B] text-white">Complete</button>
         </div>
      </div>
   );
};

export default StatusCard;
