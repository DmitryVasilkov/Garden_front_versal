
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import CartPage from '../../pages/CartPage';
import CategoriesPage from '../../pages/CategoriesPage';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';
import SearchPage from '../../pages/SearchPage';


import Nav from '../Nav';
import './index.module.css';
import { Toaster } from 'react-hot-toast';


import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../../requests/catigories';
import { getAllProducts } from '../../requests/products';
import Footer from '../Footer';
import Eror from '../Eror';
import ProductsFromTheCategoryPage from '../../pages/ProductsFromTheCategoryPage';






function App() {

  const dispatch = useDispatch();

  

  useEffect(() => {
                  dispatch(getAllCategories)
  }, []);

  useEffect(() => {
                  dispatch(getAllProducts)
  }, []);

  return (

    <div className="App">
      
      <div>
      <Toaster />
      </div>

      <Nav/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/sales" element={<AllSalesPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/categories/:id" element={<ProductsFromTheCategoryPage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/searched_products' element={<SearchPage />} />
          <Route path="/404" element={<Eror/>} />
          <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
