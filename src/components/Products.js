import React,{Component} from 'react';

class Products extends React.Component {
  render(){
    return(
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
            <div className="product">
                <a href={"#" + product._id} >
                  <img src={product.image} alt={product.title} width="250px" height="300px"></img>
                   <p> {product.title} </p>
                </a>
                <div className="product-price">
                  <div>{product.price}</div>
                  <button  ClassName="button primary">ADD To Cart</button>
                </div>
           </div>
          </li>
        ))}
        </ul>
      </div>

    );
  }
}

  export default Products;
