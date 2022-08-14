import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Title from "../../../components/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContentLeft: {
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  gridContentRight: {
    color: "white",
  },
  cardBody: {
    textAlign: "center",
  },
  titleA: {
    fontSize: 24,
    fontWeight: 600,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  content: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
  },
  driver: {
    backgroundColor: theme.palette.text.hint,
    marginBottom: theme.spacing(5),
  }
}));

const ConfigData = [
  {
    id: 1,
    title: "Streamline your data",
    color: "#53fa87",
    content: [
      {
        title: "SIMPLE DATABASE BUILDER",
        content: "Unify your spreadsheets in one beautiful relational structure",
      },
      {
        title: "WORK TOGETHER",
        content: "Share data in part or in full, and collaborate in real-time",
      },
      {
        title: "HIGH-PRODUCTIVITY LAYOUTS",
        content: "Lay out your screen in a way that makes sense for your data",
      }
    ],
  },
  {
    id: 2,
    title: "Control your data",
    color: "#fa7ada",
    content: [
      {
        title: "GRANULAR ACCESS CONTROL",
        content: "Control over who sees what — down to each row and column",
      },
      {
        title: "LINK SHARING",
        content: "Share limited views of only relevant data with third parties",
      },
      {
        title: "OWN YOUR DATA",
        content: "Rest easy with open source software, automatic backups, and no data lock-in",
      }
    ],
  },
  {
    id: 3,
    title: "Drill into your data",
    color: "#53cbff",
    content: [
      {
        title: "MORE THAN A SPREADSHEET",
        content: "See records as customizable data cards, and attach relevant images and files",
      },
      {
        title: "VISUALIZE YOUR DATA",
        content: "Create dashboard charts and summaries to see the big picture",
      },
      {
        title: "DYNAMIC REPORTS",
        content: "Make charts that update dynamically as you drill into data",
      }
    ],
  },
];

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="The World Deserves A Better Tool Than Spreadsheets"
        tip=""
      />
        {
          ConfigData.map(item => (
            <Grid container key={item.id}>
              <Grid item xs={2} />
              <Grid
                item
                xs={3}
                className={classes.gridContentLeft}
              >
                <p className={classes.titleA} style={{color: item.color}}>{item.title}</p>
              </Grid>
              <Grid item xs={1} />
              <Grid
                item
                xs={4}
                className={classes.gridContentRight}
              >
                {item.content.map(it => (
                  <div key={it.title}>
                    <p className={classes.title}>{it.title}</p>
                    <p className={classes.content}>{it.content}</p>
                  </div>
                ))}
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={8}>
                <Divider className={classes.driver} />
              </Grid>
              <Grid item xs={2} />
            </Grid>
          ))
        }
    </div>
  );
}