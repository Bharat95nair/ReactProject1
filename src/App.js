import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Carousel from './components/carousel/Carousel';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import { authInterceptor } from './interceptors/authInterceptor';

function App() {
  authInterceptor();
  return (
    <div>
         <Navbar></Navbar>
         <Categories/>
         <Carousel></Carousel>
         <Body></Body>
         <Footer></Footer>
    </div>
  );
}

export default App;
/*
 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/