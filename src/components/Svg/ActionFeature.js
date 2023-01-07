import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "60vh",
    backgroundColor: "#3BE3B2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    color: theme.palette.background.default,
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  p1: {
    fontSize: 48,
    fontWeight: 500,
  },
  p2: {
    fontSize: 48,
    fontWeight: 800,
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
  quickStart: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    background: theme.palette.background.default,
    fontSize: 18,
    color: "#ffffff",
    "&:hover": {
      color: theme.palette.background.default,
      background: "#ffffff",
    },
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.mainContainer}>
        <Grid item xs={2} />
        <Grid item xs={8} className={classes.mainContent}>
          <p className={classes.p1}>Customers analyze data
            <span className={classes.p2}>&nbsp; 80% faster</span>
          </p>
          <Button
            variant={"text"}
            className={classes.quickStart}
            endIcon={<ArrowRightAltIcon />}
            onClick={() => window.open("https://ciusji.gitbook.io/irelia/managing-documents/create-a-document", "_blank")}
          >
            START NOW
          </Button>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}