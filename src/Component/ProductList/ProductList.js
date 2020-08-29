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
  TopDealHeaderTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
  },
  TopDealHeader: {
    padding: "0px 10px",
    justifyItems: "center",
    marginBottom: "10px",
  },
  header: {
    fontSize: "20px",
    margin: "00px",
  },
  showNow: {
    margin: "0px 10px",
    color: "#cccccc",
  },
  ViewAllButton: {
    marginTop: "10px",
    backgroundColor: "#2874f0",
    border: "1px solid white",
    color: "white",
    fontWright: "800",
    padding: "8px 14px",
    cursor: "pointer",
    borderRadius: "2px",
    fontSize: "16px",
  },
  TopDealWrapper: {
    width: "100%",
    display: "flex",
    borderTop: "1px solid rgba(0,0,0,.1)",
    padding: "10px 0px",
  },
  product: {
    padding: "5px",
    textAlign: "center",
    width: "180px",
    justifyContent: "center",
  },
  ProductName: {
    fontSize: "14px",
  },
  ProductOffer: {
    color: "green",
  },
  ProductInfo: {
    color: "#cccccc",
  },
  CardImg: {
    padding: "5px",
  },
}));

export default function ProductList(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <div className={classes.TopDealHeader}>
            <div className={classes.TopDealHeaderTop}>
              <h3 className={classes.header}>{props.title}</h3>

              <button className={classes.ViewAllButton}>View All</button>
            </div>
            <p className={classes.showNow}>{props.desc}</p>
          </div>

          <div className={classes.TopDealWrapper}>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/image/150/150/kb9ou4w0/headphone/7/t/u/be910m-artis-original-imafsnjhgsmev2vj.jpeg?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/image/150/150/jv2p6kw0/bean-bag-cover/k/r/z/xl-diagio-227-comfybean-original-imafgykgscxfyehf.jpeg?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/flap/150/150/image/7184858edcf65db2.png?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/image/150/150/kb9ou4w0/headphone/7/t/u/be910m-artis-original-imafsnjhgsmev2vj.jpeg?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/image/150/150/jv2p6kw0/bean-bag-cover/k/r/z/xl-diagio-227-comfybean-original-imafgykgscxfyehf.jpeg?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/flap/150/150/image/7184858edcf65db2.png?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/flap/150/150/image/7184858edcf65db2.png?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>

            <div className={classes.product}>
              <img
                src="https://rukminim1.flixcart.com/flap/150/150/image/7184858edcf65db2.png?q=70"
                alt="Product Image"
              />
              <h3 className={classes.ProductName}>Headphones</h3>
              <p className={classes.ProductOffer}>Upto 50% off</p>
              <p className={classes.ProductInfo}>JBL,Artis & more</p>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
