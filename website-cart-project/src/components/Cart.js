import React from "react";

class Cart extends React.Component {
   render() {
      return (
         <section className="section">
            <div className="table-responsive">
               <table className="table product-table">
                  <thead>
                     <tr>
                        <th></th>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* <CartItem></CartItem>
                     <CartItem></CartItem>
                     <CartItem></CartItem> */}
                     {this.props.children}
                  </tbody>
               </table>
            </div>
         </section>
      );
   }
}

export default Cart;
