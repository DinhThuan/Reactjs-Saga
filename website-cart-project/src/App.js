import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Message from "./components/Message";
import Cart from "./components/Cart";

class App extends React.Component {
   render() {
      return (
         <div>
            {/* <!-- Header --> */}
            <Header></Header>
            <main id="mainContainer">
               <div className="container">
                  {/* <!-- Products --> */}
                  <Products></Products>
                  {/* <!-- Message --> */}
                  <Message></Message>
                  {/* <!-- Cart --> */}
                  <Cart></Cart>
               </div>
            </main>
            {/* <!-- Footer --> */}
            <Footer></Footer>
         </div>
      );
   }
}

export default App;
