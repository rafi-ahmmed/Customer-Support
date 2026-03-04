import React from 'react';

const Spinner = () => {
   return (
      <div className="flex justify-center items-center min-h-[500px]">
         <span className="loading loading-bars loading-xl text-green-600"></span>
      </div>
   );
};

export default Spinner;
