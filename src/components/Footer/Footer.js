import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "../Wrappers";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

// styles
import useStyles from "./styles";

// pictures
import IreliaFooterLogo from "../../images/irelia-footer.svg";
import GitHubLogo from "../../images/github.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container className={classes.footerPos}>
            <Grid item xs={2}>
              <img
                src={IreliaFooterLogo}
                className={classes.logo}
                alt="spotrix-logo-footer"
              />
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>IreliaTable</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/IreliaTable", "_target")}>About Us</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/IreliaTable", "_target")}>Terms</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>GuinsooLab</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>GuinsooLab Stack</p>
                  <p className={classes.body2} onClick={() => window.open("https://guinsoolab.github.io/glab", "_target")}>GuinsooLab Solutions</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/Spotrix", "_target")}>Spotrix</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ElixirNote", "_target")}>ElixirNote</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>Community</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/IreliaTable", "_target")}>
                    <img src={GitHubLogo} width={14} alt="github-logo"/>
                    &nbsp;&nbsp;GitHub
                  </p>
                </Grid>
                <Grid item xs={5} className={classes.footerBody}>
                  <b className={classes.title2}>Subscribe</b>
                  <p className={classes.body3}>Stay up to date with our latest news.</p>
                  <InputBase className={classes.input} placeholder={"email@address.com"} />
                  <Button className={classes.button}>Subscribe</Button>
                </Grid>
                <Grid item xs={1} className={classes.footerBody} />
              </Grid>
            </Grid>
          </Grid>
          {/* divider */}
          <Divider className={classes.appDivider} />
          <Typography className={classes.copyright}>
            © 2021-2022 IreliaTable & GuinsoooLab
          </Typography>
        </Container>
      </div>
    </>
  );
}