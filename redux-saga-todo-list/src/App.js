import React from "react";
import "./App.scss";
import Checkboxes from "./components/checkboxes";

export default class App extends React.Component {
   render() {
      return (
         <div className="App">
            <Checkboxes></Checkboxes>
         </div>
      );
   }
}
