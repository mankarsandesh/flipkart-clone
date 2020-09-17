import React from "react";
import "./Menu.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
    border: "1px solid red",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function MouseOverPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="menuWrap">
      <ul className="menuWrap__list">
        <li>
          Electronic <ExpandMoreIcon className="menuWrap__icon" />
        </li>
        <li>
          TVs & Appliances <ExpandMoreIcon className="menuWrap__icon" />{" "}
        </li>
        <li>
          Men <ExpandMoreIcon className="menuWrap__icon" />
        </li>
        <li>
          Women <ExpandMoreIcon className="menuWrap__icon" />{" "}
        </li>
        <li>
          Men <ExpandMoreIcon className="menuWrap__icon" />
        </li>
        <li>
          Baby & Kids <ExpandMoreIcon className="menuWrap__icon" />
        </li>
        <li>
          Home & Furniture <ExpandMoreIcon className="menuWrap__icon" />
        </li>
        <li>
          Sports,Books & More <ExpandMoreIcon className="menuWrap__icon" />
        </li>
        <li> Grocery </li>
        <li> Flights </li>
        <li> Offer Zone </li>
      </ul>
    </div>
  );
}
