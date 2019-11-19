import React from "react";
class Products extends React.Component {
   componentDidMount() {
      // console.log(this.props.products);
   }
   UNSAFE_componentWillMount() {
      // console.log(this.props.products);
   }
   render() {
      return (
         <section className="section">
            <h1 className="section-heading">List of products</h1>
            <div className="row">{this.props.children}</div>
         </section>
      );
   }
}

export default Products;
