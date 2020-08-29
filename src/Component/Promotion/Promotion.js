import React, { Component } from "react";
import {
  Card,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
 cardStyle : {
     padding:'15px',
     backgroundColor:'#f1f3f6'
 },
 topWrapper : {
     backgroundColor:'#f1f3f6'
 }
}));

export default function Promotion() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.topWrapper}>
     
      <Grid item xs={4}>
        <Card className={classes.cardStyle}>
          <img
            width="100%" 
            src="https://rukminim1.flixcart.com/flap/500/200/image/084789479074d2b2.jpg"
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className={classes.cardStyle}>
          <img
            width="100%" 
            src="https://rukminim1.flixcart.com/flap/500/200/image/764595af6c1286fd.jpg?q=50"
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className={classes.cardStyle}>
          <img
            width="100%" 
            src="https://rukminim1.flixcart.com/flap/500/200/image/084789479074d2b2.jpg"
          />
        </Card>
      </Grid>
    </Grid>
  );
}
