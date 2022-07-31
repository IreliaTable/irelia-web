import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

// styles
import useStyles from "./styles";

// pictures
import IreliaLogo from "../../images/irelia.svg";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      id="attr"
      position="fixed"
      elevation={0}
      className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img
          src={IreliaLogo}
          className={classes.logo}
          alt="glab-logo"
          onClick={() => window.open("#/app/home", "_self")}
        />
        <div className={classes.grow} />
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/irelia/", "_target")}
        >
          Documentation
        </p>
        <div>
          <Button
            variant={"outlined"}
            className={classes.buttonInfoToMore}
            onClick={() => window.open("https://github.com/IreliaTable/irelia/releases", "_target")}
          >
            Download
          </Button>
        </div>
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
