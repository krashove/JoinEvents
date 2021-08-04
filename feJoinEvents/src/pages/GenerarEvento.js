import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navibar from "../components/navibar.js";
import StepNewEvent from "../components/stepNewEvent";

import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  inputSelect: {
    display: "none",
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function GenerarEvento() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Navibar route="Generar Evento" iconRoute={<CreateIcon />} />
      </div>
      <div>
        <main className={classes.layout}>
          <StepNewEvent clases={classes} />
        </main>
      </div>
    </React.Fragment>
  );
}
