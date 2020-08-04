import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import { BrowserRouter } from 'react-router-dom';
//import Products from './components/Products.js';

function App()  {

  const  openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

    return(
      <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
               <a href="index.html">  SpeedCart</a>
            </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Signin</a>
          </div>
          </header>
          <aside className="sidebar">
            <h3> shopping categories</h3>
            <button className="close-button" onClick={closeMenu}> X </button>
            <ul>
              <li><a href="index.html">Women casuals</a></li>
                <li><a href="index.html">Men formals</a> </li>
            </ul>

          </aside>
        <main className="main">
          <div className="content">
             <ul className="products">
             {
               data.products.map(product =>
                 <li>
                    <div className="product">
                       <img className="product-image" src= {product.image} alt="productimage" />
                       <div className="product-name">
                         <a href="product.html">  {product.name}</a>
                       </div>
                       <div className="product-brand">
                         {product.brand}
                       </div>
                       <div className="price"> {product.price}</div>
                       <div className="rating">  {product.rating}</div>
                 </div>
                 </li>
               )
             }

            </ul>
         </div>
         </main>
        <footer className="footer">
            All rights reserved.
          </footer>
       </div>
       </BrowserRouter>

    );
  }

//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
