import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
   return (
      <div className="bg-gray-100">
         <Navbar />

         <div className="container mx-auto px-2">
            <Banner />
         </div>
         <Footer />
      </div>
   );
}

export default App;
