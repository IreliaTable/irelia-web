import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Typed from "react-typed";

import TopLeftImg from "../../../images/top-left-second.png";
import TopRightImg1 from "../../../images/top-right-second.png";
import TopRightImg2 from "../../../images/top-right-third.png";
import BrandFollow from "../../../images/brand-follow.png";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "140vh",
  },
  leftPaper: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  rightPaper: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  logoSlogan: {
    fontSize: 64,
    fontWeight: 800,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#ffffff"
  },
  sloganHighlight: {
    color: "#245dff"
  },
  slogan2Highlight: {
    color: theme.palette.primary.main,
  },
  sloganTyped: {
    marginLeft: theme.spacing(2),
    fontSize: 48,
    fontWeight: 600,
  },
  logoSloganBody: {
    fontSize: 18,
    fontWeight: 500,
    color: "#f0f0f0",
    width: 700,
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: 0,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginRight: theme.spacing(5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    }
  },
  buttonQuickstart: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    paddingTop: 2,
    paddingBottom: 2,
    color: theme.palette.primary.main,
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const textLines = [
    'organize data', 'analyze data', 'share data',
  ];

  const desc = "Irelia is a modern data modeling and transformation tool on top of your existing data sources to " +
    "let you work with data using a spreadsheet-like interface. It makes your data work easy."

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={1}>
          <img src={TopLeftImg} alt="log" width={"70%"} style={{marginTop: "20vh"}} />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.leftPaper}>
            <div className={classes.logoSlogan}>
              <span>
                <b className={classes.sloganHighlight}>A modern</b>
                <i className={classes.sloganTyped}>
                  <Typed strings={textLines} typeSpeed={40} backSpeed={10} loop />
                </i>
                <br/>
                <span className={classes.slogan2Highlight}>relational spreadsheet</span>
              </span>
            </div>
            <div className={classes.logoSloganBody}>
              <p>{desc}</p>
            </div>
            <div>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoToMore}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/", "_blank")}
              >
                LEARN MORE
              </Button>
              <Button
                variant={"text"}
                className={classes.buttonQuickstart}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/managing-documents/create-a-document", "_blank")}
              >
                START NOW
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.rightPaper}>
            <img src={TopRightImg1} width={"40%"} alt="img" />
            <img src={TopRightImg2} width={"70%"} alt="img" />
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <img src={BrandFollow} width={"100%"} alt="brand" />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}