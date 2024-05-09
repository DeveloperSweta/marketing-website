import './App.css';
import Craftm from './component/Craftm';
import Footer from './component/Footer';
import Header from './component/Header';
import ProductsSection from './component/ProductsSection';
import {popularProducts} from './data/popularProducts'
import { trendingProducts } from './data/trendingProducts';
import { newProducts } from './data/newProduct';
import { exploremoreProducts } from './data/exploremoreProducts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Craftm/>
      <ProductsSection headline='Most Popular Product' productsData={popularProducts}/>
      <ProductsSection headline='Trending Product' productsData={trendingProducts}/>
      <ProductsSection headline='New Arrival' productsData={newProducts}/>
      <ProductsSection headline='Explore More' productsData={exploremoreProducts}/>
      <Footer/>
    </div>
  );
}

export default App;
