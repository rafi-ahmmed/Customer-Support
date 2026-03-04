import { Suspense } from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import StatusCard from './Components/StatusCard';
import TaskCardSection from './Components/TaskCardSection';
import Spinner from './Components/Spinner';

const getTickets = async () => {
   const res = await fetch('/customerTickets.json');
   return res.json();
};

const ticketPromise = getTickets();

function App() {
   return (
      <div className="bg-gray-100">
         <Navbar />

         <div className="container mx-auto px-2 ">
            <Banner />
            {/* Tickets Section */}
            <section className="my-16 grid grid-cols-12 gap-7 justify-center items-start">
               {/* Customer Tickets */}
               <div className=" col-span-full md:col-span-7 lg:col-span-9">
                  <h2 className="text-[#34485A] text-xl font-semibold">
                     Customer Tickets
                  </h2>
                  {/* Task cards */}

                  <Suspense fallback={<Spinner />}>
                     <TaskCardSection ticketPromise={ticketPromise} />
                  </Suspense>
               </div>
               {/* Status task */}
               <div className=" col-span-full md:col-span-5 lg:col-span-3">
                  <div>
                     <h2 className="text-[#34485A] text-xl font-semibold">
                        Tasks Status
                     </h2>
                     <p className="text-gray-400 mt-4 text-base">
                        Select a ticket to add to a task status{' '}
                     </p>

                     <StatusCard />
                  </div>
                  {/* Resolved tasks */}
                  <div className="mt-9">
                     <h2 className="text-[#34485A] text-xl font-semibold">
                        Resolved Task
                     </h2>
                     <p className="text-gray-400 mt-2 text-base">
                        No resolved task yet.
                     </p>
                     <p className="text-[#001931] mt-2 text-base p-3 bg-[#e0e7ff] rounded-sm">
                        No resolved task yet
                     </p>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </div>
   );
}

export default App;
