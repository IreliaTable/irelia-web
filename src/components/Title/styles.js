import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    flexDirection: "column",
  },
  featureTitle: {
    color: "#ffffff",
    fontWeight: 500,
    fontSize: 40,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 0,
    paddingLeft: "25%",
    paddingRight: "25%",
  },
  featureTip: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
    color: "#ffffff",
  },
  tip: {
    width: 400,
  },
}));
