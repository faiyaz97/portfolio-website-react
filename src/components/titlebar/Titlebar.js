import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Switch from "./Switch";
import Logo from "../../images/word-ffu-logo.png";

import { AiOutlineSave } from "react-icons/ai";
import {
  BsArrowCounterclockwise,
  BsArrowClockwise,
  BsBoxArrowInUp,
} from "react-icons/bs";
import {
  VscClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "35px",
    margin: "0px",
    background: "#2B579A",
    color: "#fff",
    fontSize: "12px",
  },
  leftGrid: {
    paddingLeft: "20px",
  },
  spanText: {
    paddingRight: "6px",
  },
  leftIconDiv: {
    height: "100%",
    paddingRight: "6px",
    paddingLeft: "6px",
    background: "#2B579A",
    "&:hover": {
      background: "#124078",
    },
    display: "flex",
    alignItems: "center",
  },
  rightIconDiv: {
    height: "100%",
    paddingRight: "14px",
    paddingLeft: "14px",
    background: "#2B579A",
    "&:hover": {
      background: "#124078",
    },
    display: "flex",
    alignItems: "center",
  },
  closeIcon: {
    height: "100%",
    paddingRight: "14px",
    paddingLeft: "14px",
    background: "#2B579A",
    "&:hover": {
      background: "#e81123",
    },
    display: "flex",
    alignItems: "center",
  },
  swtichDiv: {
    paddingRight: "6px",
    paddingLeft: "6px",
  },
}));

function Titlebar() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      {/* left side of the titlebar */}
      <Grid
        container
        className={classes.leftGrid}
        item
        xs={5}
        justifyContent="flex-start"
        alignItems="center"
      >
        <span>AutoSave</span>
        <div className={classes.swtichDiv}>
          <Switch />
        </div>

        <div className={classes.leftIconDiv}>
          <AiOutlineSave size={20} />
        </div>
        <div className={classes.leftIconDiv}>
          <BsArrowCounterclockwise size={20} />
        </div>
        <div className={classes.leftIconDiv}>
          <BsArrowClockwise size={20} />
        </div>
      </Grid>

      {/* middle side of the titlebar */}
      <Grid container item xs={2} justifyContent="center" alignItems="center">
        Portfolio_website - Word
      </Grid>

      {/* right side of the titlebar */}
      <Grid container item xs={5} justifyContent="flex-end" alignItems="center">
        <div className={classes.rightIconDiv}>
          <span className={classes.spanText}>Faiyaz Farhan Uddin</span>

          <img src={Logo} height="25px" />
        </div>
        <div className={classes.rightIconDiv}>
          <BsBoxArrowInUp size={16} />
        </div>
        <div className={classes.rightIconDiv}>
          <VscChromeMinimize size={16} />
        </div>
        <div className={classes.rightIconDiv}>
          <VscChromeMaximize size={16} />
        </div>
        <div className={classes.closeIcon}>
          <VscClose size={18} />
        </div>
      </Grid>
    </Grid>
  );
}

export default Titlebar;
