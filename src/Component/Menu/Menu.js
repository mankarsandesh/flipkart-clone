import React from 'react'
import "./Menu.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Menu() {
    return (
        <div className="menuWrap">
            <ul className="menuWrap__list">
                <li> Electronic <ExpandMoreIcon className="menuWrap__icon"/></li>
                <li> TVs & Appliances  <ExpandMoreIcon className="menuWrap__icon"/> </li>
                <li> Men  <ExpandMoreIcon className="menuWrap__icon"/></li>
                <li> Women  <ExpandMoreIcon className="menuWrap__icon"/> </li>
                <li> Men  <ExpandMoreIcon className="menuWrap__icon"/></li>
                <li> Baby & Kids  <ExpandMoreIcon className="menuWrap__icon"/></li>
                <li> Home & Furniture  <ExpandMoreIcon className="menuWrap__icon"/></li>
                <li> Sports,Books & More  <ExpandMoreIcon className="menuWrap__icon"/></li>
                <li> Grocery </li>
                <li> Flights </li>
                <li> Offer Zone  </li>
            </ul>
        </div>
    )
}

export default Menu
