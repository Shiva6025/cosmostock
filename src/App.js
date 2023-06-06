import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import StockDetails from './components/stock details/StockDetails';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/stock" element={<StockDetails></StockDetails>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
