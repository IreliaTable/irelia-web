import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "90vh",
    backgroundColor: "#ffffff",
    backgroundImage: 'url(' + require('../../images/irelia-action.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
  },
  mainContainer: {
    color: "#ffffff",
  },
  p1: {
    fontSize: 18,
    fontWeight: 800,
  },
  p2: {
    fontSize: 36,
    fontWeight: 600,
  },
  p3: {
    color: theme.palette.text.primary,
    fontSize: 24,
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  p4: {
    paddingLeft: theme.spacing(4),
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    "& > svg": {
      width: 30,
      height: 30,
    }
  },
  button1: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    width: "100%"
  },
  button2: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  buttonStyle1: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: "#3464ff",
    color: "#ffffff",
    borderRadius: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontWeight: 800,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    }
  },
  buttonStyle2: {
    color: "#3464ff",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: 500,
  }
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.mainContainer}>
        <Grid item xs={2} />
        <Grid item xs={4}>
          <p className={classes.p1}>THE SPROUTS PROGRAM</p>
          <p className={classes.p2}>Build with an expert</p>
        </Grid>
        <Grid item xs={4}>
          <Card elevation={8}>
            <p className={classes.p3}>Book a free consultation</p>

            <p className={classes.p4}>
              <DoneIcon color={"primary"} />
              Design for your needs
            </p>
            <p className={classes.p4}>
              <DoneIcon color={"primary"} />
              Plan your solution
            </p>
            <p className={classes.p4}>
              <DoneIcon color={"primary"} />
              Build with experts
            </p>

            <div className={classes.button1}>
              <Button
                variant={"contained"}
                fullWidth
                className={classes.buttonStyle1}
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/appendix/help")}
              >
                INQUIRE NOW
              </Button>
            </div>
            <div className={classes.button2}>
              <Button
                variant={"text"}
                fullWidth
                className={classes.buttonStyle2}
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/appendix/help")}
              >
                Learn More
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}