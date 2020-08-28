import React, { Component } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
    TopDealHeader: {
      padding:'0px 20px',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
    },
    header : {
        marginRight:'20px'
    },
    timeLeft: {
        color:'#cccccc'
    },
    ViewAllButton : {
        flexDirection:'end',
        backgroundColor:'#2874f0',
        border:'1px solid white',
        color:'white',
        fontWright:'800',
        padding:'8px 14px',
        cursor:'pointer',
        borderRadius:'2px',
        fontSize:'16px'
    },
    TopDealWrapper: {
        display:'flex'
    },
    product : {
        padding:'5px',
        textAlign:'center',
        width:'180px',
        justifyContent:'center'
    },
    ProductName :{
        fontSize:'14px'
    },
    ProductOffer : {
        color:'green'
    },
    ProductInfo : {
        color:'#cccccc'
    }

  }));

export default function TopDeals(){
    const classes = useStyles();
    

    return (
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Card>
            <div className={classes.TopDealHeader}>
              <h3  className={classes.header} >Deals of the Day <small className={classes.timeLeft}>03:07:48 Left</small></h3>
              
              <button className={classes.ViewAllButton}>View All</button>
            </div>
            <div className={classes.TopDealWrapper} >
              <div className={classes.product}>
                <img src="https://rukminim1.flixcart.com/image/150/150/kb9ou4w0/headphone/7/t/u/be910m-artis-original-imafsnjhgsmev2vj.jpeg?q=70" alt="Product Image" />
                <h3 className={classes.ProductName}>Headphones</h3>
                <p  className={classes.ProductOffer} >Upto 50% off</p>
                <p  className={classes.ProductInfo}>JBL,Artis & more</p>
              </div>
              <div className={classes.product}>
                <img src="https://rukminim1.flixcart.com/image/150/150/jv2p6kw0/bean-bag-cover/k/r/z/xl-diagio-227-comfybean-original-imafgykgscxfyehf.jpeg?q=70" alt="Product Image" />
                <h3 className={classes.ProductName}>Headphones</h3>
                <p  className={classes.ProductOffer} >Upto 50% off</p>
                <p  className={classes.ProductInfo}>JBL,Artis & more</p>
              </div>
              <div className={classes.product}>
                <img src="https://rukminim1.flixcart.com/flap/150/150/image/7184858edcf65db2.png?q=70" alt="Product Image" />
                <h3 className={classes.ProductName}>Headphones</h3>
                <p  className={classes.ProductOffer} >Upto 50% off</p>
                <p  className={classes.ProductInfo}>JBL,Artis & more</p>
              </div>
              <div className={classes.product}>
                <img src="https://rukminim1.flixcart.com/image/150/150/kb9ou4w0/headphone/7/t/u/be910m-artis-original-imafsnjhgsmev2vj.jpeg?q=70" alt="Product Image" />
                <h3 className={classes.ProductName}>Headphones</h3>
                <p  className={classes.ProductOffer} >Upto 50% off</p>
                <p  className={classes.ProductInfo}>JBL,Artis & more</p>
              </div>
              <div className={classes.product}>
                <img src="https://rukminim1.flixcart.com/image/150/150/jv2p6kw0/bean-bag-cover/k/r/z/xl-diagio-227-comfybean-original-imafgykgscxfyehf.jpeg?q=70" alt="Product Image" />
                <h3 className={classes.ProductName}>Headphones</h3>
                <p  className={classes.ProductOffer} >Upto 50% off</p>
                <p  className={classes.ProductInfo}>JBL,Artis & more</p>
              </div>
              <div className={classes.product}>
                <img src="https://rukminim1.flixcart.com/flap/150/150/image/7184858edcf65db2.png?q=70" alt="Product Image" />
                <h3 className={classes.ProductName}>Headphones</h3>
                <p  className={classes.ProductOffer} >Upto 50% off</p>
                <p  className={classes.ProductInfo}>JBL,Artis & more</p>
              </div>
              

              
             
            </div>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card >
            <img
              width="100%"
              src="https://rukminim1.flixcart.com/flap/464/708/image/7e973bfac61fd4d8.jpg?q=70"
            />
          </Card>
        </Grid>
      </Grid>
    );
  }



