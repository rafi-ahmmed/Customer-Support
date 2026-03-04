import { Suspense, useState } from 'react';
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
   const [customerTickets, setCustomerTickets] = useState([]);
   const [inProgressCount, setInProgressCount] = useState(0);
   const [resolvedCount, setResolvedCount] = useState(0);
   const [statusTask, setStatusTask] = useState([]);
   const [resolvedTask, setResolveTask] = useState([]);
   //  console.log(customerTickets);
   //  console.log(inProgressCount);
   //  console.log(statusTask);
   console.log(resolvedTask);
   return (
      <div className="bg-gray-100">
         <Navbar />

         <div className="container mx-auto px-3 ">
            <Banner
               inProgressCount={inProgressCount}
               resolvedCount={resolvedCount}
            />
            {/* Tickets Section */}
            <section className="my-16 grid grid-cols-12 gap-7 justify-center items-start">
               {/* Customer Tickets */}
               <div className=" col-span-full md:col-span-7 lg:col-span-9">
                  <h2 className="text-[#34485A] text-xl font-semibold">
                     Customer Tickets
                  </h2>
                  {/* Task cards */}

                  <Suspense fallback={<Spinner />}>
                     <TaskCardSection
                        customerTickets={customerTickets}
                        setCustomerTickets={setCustomerTickets}
                        ticketPromise={ticketPromise}
                        inProgressCount={inProgressCount}
                        setInProgressCount={setInProgressCount}
                        resolvedCount={resolvedCount}
                        setResolvedCount={setResolvedCount}
                        statusTask={statusTask}
                        setStatusTask={setStatusTask}
                     />
                  </Suspense>
               </div>
               {/* Status task */}
               <div className=" col-span-full md:col-span-5 lg:col-span-3">
                  <div>
                     <h2 className="text-[#34485A] text-xl font-semibold">
                        Tasks Status
                     </h2>

                     {statusTask.length === 0 && (
                        <p className="text-gray-400 mt-4 text-base">
                           Select a ticket to add to a task status{' '}
                        </p>
                     )}

                     {statusTask.length > 0 &&
                        statusTask.map((status) => (
                           <StatusCard
                              key={status.id}
                              status={status}
                              statusTask={statusTask}
                              setStatusTask={setStatusTask}
                              resolvedTask={resolvedTask}
                              setResolveTask={setResolveTask}
                              inProgressCount={inProgressCount}
                              setInProgressCount={setInProgressCount}
                              resolvedCount={resolvedCount}
                              setResolvedCount={setResolvedCount}
                              customerTickets={customerTickets}
                              setCustomerTickets={setCustomerTickets}
                           />
                        ))}
                     {/* <StatusCard /> */}
                  </div>
                  {/* Resolved tasks */}
                  <div className="mt-9">
                     <h2 className="text-[#34485A] text-xl font-semibold">
                        Resolved Task ({resolvedTask.length || 0})
                     </h2>

                     {resolvedTask.length === 0 && (
                        <p className="text-gray-400 mt-2 text-base">
                           No resolved task yet.
                        </p>
                     )}
                     {resolvedTask.map((resolved) => (
                        <p
                           key={resolved.id}
                           className="text-[#001931] mt-3 text-base p-3 bg-[#e0e7ff] rounded-sm"
                        >
                           {resolved.title}
                        </p>
                     ))}
                  </div>
               </div>
            </section>
         </div>
         <Footer />
         
      </div>
      
   );
}

export default App;
