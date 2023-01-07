import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';

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
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/irelia/", "_target")}
        >
          Overview
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/irelia/ecosystem/ecosystem", "_target")}
        >
          Ecosystem
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
        >
          Solutions
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/irelia/templates/personal", "_target")}
        >
          Templates
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/irelia/appendix/faq", "_target")}
        >
          FAQs
        </p>

        <div className={classes.grow} />
        <div>
          <Button
            variant={"outlined"}
            className={classes.buttonDownload}
            onClick={() => window.open("https://github.com/IreliaTable/irelia/releases", "_target")}
          >
            Download
          </Button>
        </div>
        <GitHubIcon style={{marginLeft: 24, marginRight: 24}} onClick={() => window.open("https://github.com/IreliaTable", "_target")} />
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
