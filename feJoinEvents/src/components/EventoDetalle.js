import React, { Component } from "react";

import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
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
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function EventoDetalle(props) {
  const classes = useStyles();

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
          </div>
        </Card>
        <div>
          <IconButton color="Secondary">
            <FavoriteIcon />
          </IconButton>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Theme Provider
            </Button>
          </ThemeProvider>
        </div>
      </Container>
    </div>
  );
}
