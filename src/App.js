import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './component/header/header';
import Advertising from './component/Advertising/Advertising';
import EndHome from './component/End Home/End Home';
import ShoppingCart from './component/Shopping Cart/Shopping Cart';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>

    {/* <Header/> */}
    {/* <Advertising /> */}
    {/* < EndHome /> */}
    <ShoppingCart /> 
    {/* <Home /> */}

    </BrowserRouter>
  
  );
}

export default App;
