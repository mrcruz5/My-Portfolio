import "./App.scss";
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
