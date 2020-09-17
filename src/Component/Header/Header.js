import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Box,
  Dialog,
  DialogTitle,
  Grid,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="headerMain" boxShadow={2}>
      <div className="headerMain__navbar">
        <div className="headerMain__logo">
          <img
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
            alt="Flipkart"
          />
          Explore{" "}
          <span>
            {" "}
            Plus{" "}
            <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png" />
          </span>
        </div>
        <div className="headerMain__input">
          <InputBase
            className="headerMainInput"
            placeholder="Search of products, brands and more"
            inputProps={{ "aria-label": "Search of products, brands and more" }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon className="headerMain__searchInputButton" />
          </IconButton>
        </div>
        <div className="headerMain__button">
          <button className="headerMain__login" onClick={handleClickOpen}>
            {" "}
            Login
          </button>

          <Dialog
            maxWidth="lg"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
          >
            <div className="loginDialog">
              <Grid container>
                <Grid item lg={5}>
                  <Paper className="loginLeft">
                    <h2>Login</h2>
                    <p>
                      Get access to your Orders, Wishlist and Recommendations
                    </p>
                  </Paper>
                </Grid>
                <Grid item lg={7}>
                  <Paper className="loginRight">
                      
                      <Box mt={1}>
                        <TextField
                          fullWidth="true"
                          id="standard-basic"
                          label="Enter Email/Mobile Number"
                        />
                      </Box>
                      <Box mt={2}>
                        <TextField
                          classes="input"
                          fullWidth="true"
                          id="standard-basic"
                          label="Enter Password"
                        />
                      </Box>
                      <Box mt={4}>
                        <div className="loginButton">Login</div>  
                        <h5 className="orDiv">OR</h5>
                        <div className="requestButton">Request OTP</div>  
                      </Box>
                      <p  className="newAccount">
                        <a href="">New to Flipkart? Create an account</a>
                      </p>
                      
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Dialog>

          <div className="headerMain__more">
            More <ExpandMoreIcon />
          </div>
          <div className="headerMain__cart">
            {" "}
            <ShoppingCartIcon /> Cart
          </div>
        </div>
      </div>
    </Box>
  );
}
