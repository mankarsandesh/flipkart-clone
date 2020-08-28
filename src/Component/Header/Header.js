import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (      
        <div className="headerMain">
            <div className="headerMain__navbar">

                <div className="headerMain__logo">
                    <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt="Flipkart" />
                    Explore <span> Plus <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png" /></span>
                </div>
                <div className="headerMain__input">
                    <InputBase
                        className="headerMainInput"
                        placeholder="Search of products, brands and more"
                        inputProps={{ 'aria-label': 'Search of products, brands and more' }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon className="headerMain__searchInputButton" />
                    </IconButton>

                </div>
                <div className="headerMain__button">
                    <div className="headerMain__login">Login</div>
                    <div className="headerMain__more">More <ExpandMoreIcon /></div>
                    <div className="headerMain__cart"> <ShoppingCartIcon /> Cart</div>
                </div>
            </div>
           
        </div>
       
    )
}

export default Header
