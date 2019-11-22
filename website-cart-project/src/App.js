import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

class App extends React.Component {
   render() {
      return (
         <div>
            {/* <!-- Header --> */}
            <Header></Header>
            <main id="mainContainer">
               <div className="container">
                  {/* <!-- Products --> */}
                  {/* <Products></Products> */}
                  <ProductsContainer />
                  {/* <!-- Message --> */}
                  {/* <Message></Message> */}
                  <MessageContainer></MessageContainer>
                  {/* <!-- Cart --> */}
                  {/* <Cart></Cart> */}
                  <CartContainer></CartContainer>
               </div>
            </main>
            {/* <!-- Footer --> */}
            <Footer></Footer>
         </div>
      );
   }
}

export default App;
