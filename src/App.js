
import './App.css';
import './font.css';
import Topbar from './Pages/Topbar';
import Home from './Pages/Home';
// import Test from './Pages/Test';
import Footer from './Pages/Footer';

function App() {
  return (
      <div className="overflow-x-hidden sm:overflow-auto">
          <Topbar />
          <Home />
          {/* <Test/> */}
          <Footer />
      </div>
  );
}

export default App;
