import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import IreliaBLogImg1 from "../../../images/irelia-blog-dbt-cloud-metric-card-1.png"
import IreliaBLogImg2 from "../../../images/irelia-blog-dbt-cloud-metric-card.png"
import IreliaBLogImg3 from "../../../images/irelia-blog-long-form-workflow-rc.png"
import IreliaBLogImg4 from "../../../images/irelia-kda-datasheet-rc.png"
import IreliaBLogImg5 from "../../../images/irelia-rc-modern-data-stack.png"
import IreliaBLogImg6 from "../../../images/irelia-top-trends-22-rc.png"


const useStyles = makeStyles((theme) => ({
  root: {
    height: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  imgItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
  }
}));

export default function Feature4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container justify={"space-between"}>
            <Grid item className={classes.imgItem}>
              <img
                src={IreliaBLogImg1}
                alt="irelia-blog"
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
              />
            </Grid>
            <Grid item className={classes.imgItem}>
              <img
                src={IreliaBLogImg2}
                alt="irelia-blog"
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
              />
            </Grid>
            <Grid item className={classes.imgItem}>
              <img
                src={IreliaBLogImg3}
                alt="irelia-blog"
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
              />
            </Grid>
          </Grid>

          <Grid container justify={"space-between"} style={{marginTop: 50}}>
            <Grid item className={classes.imgItem}>
              <img
                src={IreliaBLogImg4}
                alt="irelia-blog"
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
              />
            </Grid>
            <Grid item className={classes.imgItem}>
              <img
                src={IreliaBLogImg5}
                alt="irelia-blog"
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
              />
            </Grid>
            <Grid item className={classes.imgItem}>
              <img
                src={IreliaBLogImg6}
                alt="irelia-blog"
                onClick={() => window.open("https://ciusji.gitbook.io/irelia/solutions/solutions", "_target")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}