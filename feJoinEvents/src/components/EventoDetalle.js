import React from "react";

import {
  makeStyles,
  createTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { green, blue } from "@material-ui/core/colors";
import TwitterIcon from "@material-ui/icons/Twitter";

const tema = createTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 500,
    height: 350,
  },
  controls: {
    display: "flex",
    paddingLeft: tema.spacing(30),
    paddingBottom: tema.spacing(1),
  },
  margin: {
    margin: tema.spacing(1),
  },
  paper: {
    padding: tema.spacing(2),
    textAlign: "center",
    color: tema.palette.text.secondary,
  },
  buttons: {
    display: "flex",
    paddingLeft: tema.spacing(1),
  },
}));

const ColorButton = withStyles(() => ({
  root: {
    color: tema.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function EventoDetalle(props) {
  const classes = useStyles(tema);

  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={props.card.img}
            title={props.card.titulo}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                component="h5"
                variant="subtitle1"
                color="textSecondary"
              >
                {props.card.fecha}
              </Typography>
              <Typography variant="h5" color="textPrimary">
                {props.card.titulo}
              </Typography>
            </CardContent>
            <div className={classes.controls}>Precio: {props.card.precio}</div>
          </div>
        </Card>
        <div className={classes.buttons}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton color="Secondary">
              <FavoriteIcon />
            </IconButton>
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <spam style={{ color: "white" }}>Participar</spam>
            </ColorButton>
          </Grid>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>{props.card.detalles}</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <div>
                  <h5>Ofrecido por:</h5>
                  <p>
                    <h5>{props.card.origen}</h5>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={props.card.twitter}
                    >
                      <TwitterIcon />
                      Seguir
                    </Button>
                  </p>
                  <h5>Fecha y hora:</h5>
                  <p>
                    {props.card.fecha} - {props.card.hora}
                  </p>
                  <h5>Plataforma:</h5>
                  <p>{props.card.plataforma}</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
