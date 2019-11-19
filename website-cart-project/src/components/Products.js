import React from "react";
import Product from "./Product";
import { connect } from "react-redux";

class Products extends React.Component {
   componentDidMount() {
      console.log(this.props.products);
   }
   UNSAFE_componentWillMount() {
      console.log(this.props.products);
   }
   render() {
      return (
         <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
               <Product></Product>
               <Product></Product>
               <Product></Product>
            </div>
         </section>
      );
   }
}

const mapStateToProps = state => {
   console.log(state);
   return {
      products: state.product
   };
};

const mapDispatchToProps = dispatch => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
