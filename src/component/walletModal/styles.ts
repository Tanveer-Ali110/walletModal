import { Button as MUbutton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useConnectModalStyle = makeStyles((theme) => ({
  root: {
    width: 300,
    [theme.breakpoints.down(375)]: {
      width: "100%",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
  },
  pointer: {
    cursor: "pointer",
  },
  walletWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px 0px",
    justifyContent: "space-around",
    alignContent: "space-between",
    paddingBlock: 20,
    maxHeight: "25em",
    overflowY: "scroll",
  },
  walletIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
    width: "35%",
    gap: "10px",
    float: "left",
  },
}));

export const useLogOutModal = makeStyles((theme) => ({
  root: {
    width: 400,
    [theme.breakpoints.down(470)]: {
      width: "100%",
    },
    [theme.breakpoints.up(320)]: {
      width: "100%",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pointer: {
    cursor: "pointer",
  },
  body: {
    marginTop: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
}));

export const Button = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    padding: "5px 10px",
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(MUbutton);
