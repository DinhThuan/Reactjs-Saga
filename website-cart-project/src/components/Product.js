import React from "react";
import { connect } from "react-redux";

class Product extends React.Component {
   showRating(product) {
      let result = [];
      for (let i = 0; i < product; i++) {
         result.push(<i className="fa fa-star" key={i}></i>);
      }
      for (let j = 0; j < 5 - product; j++) {
         result.push(<i className="fa fa-star-o" key={j + 5}></i>);
      }
      return result;
   }
   onAddToCart = product => {
      this.props.onAddToCart(product);
   };
   render() {
      let { product } = this.props;
      return (
         <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
               <div className="view overlay hm-white-slight z-depth-1">
                  <img
                     src={product.image}
                     className="img-fluid"
                     alt={product.name}
                  />
                  <a href=".">
                     <div className="mask waves-light waves-effect waves-light"></div>
                  </a>
               </div>
               <div className="card-body">
                  <h4 className="card-title">
                     <strong>
                        <a href=".">{product.name}</a>
                     </strong>
                  </h4>
                  <ul className="rating">
                     <li>{this.showRating(product.rating)}</li>
                  </ul>
                  <p className="card-text">{product.description}</p>
                  <div className="card-footer">
                     <span className="left">{product.price}$</span>
                     <span className="right">
                        <span
                           className="btn-floating blue-gradient"
                           onClick={() => {
                              this.onAddToCart(product);
                           }}
                        >
                           <i className="fa fa-shopping-cart"></i>
                        </span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Product;
