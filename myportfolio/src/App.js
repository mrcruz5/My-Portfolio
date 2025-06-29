import "./App.scss";
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './container/About/About';
import Work from './container/Work/Work';
import Footer from './container/Footer/Footer';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
