import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css';
import Header from './component/header/header';
import Advertising from './component/Advertising/Advertising';
import EndHome from './component/End Home/End Home';
import ShoppingCart from './component/Shopping Cart/Shopping Cart';
import Home from './pages/Home/Home';
import ShoppingCartMain from './pages/Shopping Cart/Shopping Cart main';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/products' element={<Products/>} /> */}
      {/* <Route path='' element={<Categories/>} /> */}
      {/* <Route path='' element={<AboutUs/>} /> */}
      {/* <Route path='' element={<Contact/>} /> */}
      {/* <Route path='' element={<Blog/>} /> */}
      <Route path='/ShoppingCartMain' element={<ShoppingCartMain/>} />








    </Route>
  )
)

function App() {
  return (
    <BrowserRouter>

    <Header/>
    {/* <Advertising /> */}
    {/* < EndHome /> */}
    {/* <ShoppingCart />  */}

    {/* <Home /> */}
    {/* <ShoppingCartMain/> */}

    </BrowserRouter>
  
  );
}

export default App;
