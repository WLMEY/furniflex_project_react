import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
    
import './App.css';
import Header from './component/header/header';
import Advertising from './component/Advertising/Advertising';
import EndHome from './component/End Home/End Home';
import ShoppingCart from './component/Shopping Cart/Shopping Cart';
import Home from './pages/Home/Home';
import ShoppingCartMain from './pages/Shopping Cart/Shopping Cart main';
import Products from './pages/Products/Products';
import Categories from './pages/categories/Categories';
import AboutUs from './pages/About Us/AboutUs';
import Contact from './pages/contact us/Contact';
import Blog from './pages/Blog/Blog';
import FeaturedCategories from './pages/Home/featured categories';
import ProductDetails from './pages/product details/ProductDetails';

// import 'src/styles/Scrollbar.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='products' element={<Products />} >
        <Route index element={<Products />} />
        <Route path='ProductDetails' element={<ProductDetails />} />
      </Route>
      <Route path='Categories' element={<Categories />} />
      <Route path='AboutUs' element={<AboutUs />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Blog' element={<Blog />} />
      <Route path='ShoppingCartMain' element={<ShoppingCartMain />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;




  // <BrowserRouter>
  {/* <Header/> */ }
  {/* <FeaturedCategories/> */ }

  {/* <Advertising /> */ }
  {/* < EndHome /> */ }
  {/* <ShoppingCart />  */ }

  {/* <Home /> */ }
  {/* <ShoppingCartMain/> */ }

  // </BrowserRouter>



}

export default App;
