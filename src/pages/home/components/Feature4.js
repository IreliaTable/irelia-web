import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import IreliaBLogImg1 from "../../../images/irelia-blog-with-guinsoolab.png"
import IreliaBLogImg2 from "../../../images/irelia-blog-with-dbt.png"
import IreliaBLogImg3 from "../../../images/irelia-blog-with-workflow.png"
import IreliaBLogImg4 from "../../../images/irelia-blog-datasheet.png"
import IreliaBLogImg5 from "../../../images/irelia-blog-templates.png"
import IreliaBLogImg6 from "../../../images/irelia-blog-trends-years.png"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: theme.spacing(5),
  },
  imgItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    marginTop: theme.spacing(5),
  },
  title: {
    fontWeight: 600,
    color: "#235dff",
  },
  desc: {
    fontWeight: 600,
    color: theme.palette.background.default,
  },
}));

const blogs = [
  {
    img: IreliaBLogImg1,
    link: 'https://ciusji.gitbook.io/irelia/blogs/blogs',
    title: 'Irelia with GuinsooLab',
    desc: 'Quickstart with Irelia & GuinsooLab',
  },
  {
    img: IreliaBLogImg2,
    link: 'https://ciusji.gitbook.io/irelia/blogs/blogs',
    title: 'Build Data With Irelia & DBT',
    desc: 'Build data with Irelia & dbt',
  },
  {
    img: IreliaBLogImg3,
    link: 'https://ciusji.gitbook.io/irelia/blogs/blogs',
    title: 'Task Workflow',
    desc: 'Build your workflow in Irelia',
  },
  {
    img: IreliaBLogImg4,
    link: 'https://ciusji.gitbook.io/irelia/blogs/blogs',
    title: 'Data Sheet Explore',
    desc: 'Explore your data in Irelia',
  },
  {
    img: IreliaBLogImg5,
    link: 'https://ciusji.gitbook.io/irelia/blogs/blogs',
    title: 'Irelia Templates',
    desc: 'Tutorials with Irelia templates',
  },
  {
    img: IreliaBLogImg6,
    link: 'https://ciusji.gitbook.io/irelia/blogs/blogs',
    title: 'Irelia Top Trends',
    desc: 'Irelia top trends in data and analytics',
  }
]

export default function Feature4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={1} lg={2}>
        </Grid>
        <Grid item md={10} lg={8}>
          <Grid container justify={"space-between"}>
            {blogs.map(it => (
              <Grid item md={4} lg={4} className={classes.imgItem} key={it.img}>
                <img
                  src={it.img}
                  width={"90%"}
                  alt="irelia-blog"
                  onClick={() => window.open(it.link, "_target")}
                />
                <p className={classes.title}>{it.title.toUpperCase()}</p>
                <p className={classes.desc}>{it.desc}</p>
              </Grid>
              )
            )}
          </Grid>
        </Grid>
        <Grid item md={1} lg={2}>
        </Grid>
      </Grid>
    </div>
  );
}