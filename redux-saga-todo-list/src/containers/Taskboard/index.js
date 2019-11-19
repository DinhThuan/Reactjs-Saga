import React from "react";
import styles from './styles.js'
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { STATUSES } from "../../constants/index.js";


class TaskBoard extends React.Component {
   renderBoard = () => {

      return (
         <Grid container spacing={2}>
            {
               STATUSES.map((status, index) => {
                  return (
                     <Grid item md={4} xs={12} key={status.value}>
                        {status.label}
                     </Grid>
                  )
               })
            }
         </Grid>
      );
   }
   render() {
      const { classes } = this.props;
      console.log("props:", this.props)
      return (
         <div className={classes.taskBoard}>
            <Button variant="contained" color="primary" className={classes.button}>
               <AddIcon></AddIcon>
               Add new tasks
            </Button>
            {this.renderBoard()}
         </div>
      );
   }
}

export default withStyles(styles)(TaskBoard)

