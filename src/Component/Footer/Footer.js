import React, { Component } from "react";
import { Grid, Card, Box, makeStyles } from "@material-ui/core";
import './Footer.css';

export default function Footer() {


  return (
    <Grid container m={2}>
      <Grid item xs={12}>
        <Card>
          <Box p={2}>
            <h5>
              <span className="heading">Top Stories: </span> Brand Directory
            </h5>
            <p className="headerWrapper">       
            <a className="heading">MOST SEARCH FOR ON FLIPKART</a>     
                <div>
                <a href="">Flipkart GIft Card Store |</a>
                </div>
                  
                <div>
                <a href="">Flipkart GIft Card Store |</a>
                </div>
            </p>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
