import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
   return (
      <div className="">
         {/* In Progress */}
         <div className="flex justify-center items-center gap-6 mt-16">
            <div className="flex-1 rounded-lg bg-linear-to-r from-[#642fe3] to-[#9f62f2]">
               <div
                  style={{
                     backgroundImage: `url(${vector1})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: '',
                  }}
                  className=" min-h-48 md:min-h-64 flex justify-center items-center "
               >
                  <div>
                     <h2 className="text-white text-2xl font-semibold">
                        In-Progress
                     </h2>
                     <p className=" text-center mt-2.5 text-white text-4xl font-bold">
                        {inProgressCount}
                     </p>
                  </div>
               </div>
            </div>
            {/* Resolved */}
            <div className="flex-1 rounded-lg bg-linear-to-r from-[#54cf68] to-[#00827a]">
               <div
                  style={{
                     backgroundImage: `url(${vector1})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: '',
                  }}
                  className="min-h-48 md:min-h-64 flex justify-center items-center "
               >
                  <div>
                     <h2 className="text-white text-2xl font-semibold">
                        Resolved
                     </h2>
                     <p className=" text-center mt-2.5 text-white text-4xl font-bold">
                        {resolvedCount}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
