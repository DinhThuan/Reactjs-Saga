import React from "react";
import styles from './styles.js'
import { withStyles } from "@material-ui/styles";
import Taskboard from "../Taskboard";

class App extends React.Component {
   render() {
      // const {classes} = this.props;
      console.log("props:", this.props)
      return (
         <div className="App">
            <Taskboard></Taskboard>
         </div>
      );
   }
}

export default withStyles(styles)(App)

