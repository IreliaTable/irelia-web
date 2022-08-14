import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";
import Ecosystem from "../../../images/guinsoo-ecosystem-irelia.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="Irelia Ecosystem On GuinsooLab"
          tip=""
        />
        <Grid container className={classes.container}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <img src={Ecosystem} width={"100%"} alt="img" />
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}