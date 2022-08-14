import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "65vh",
    backgroundColor: "#3564ff",
    color: "white",
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={4} className={classes.root} />
        <Grid item xs={4} className={classes.root} />
        <Grid item xs={4} className={classes.root} />
      </Grid>
    </div>
  );
}