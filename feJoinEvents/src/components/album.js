import React from "react";

import Button from "@material-ui/core/Button";
import Cookies from "universal-cookie";

import FavoriteIcon from "@material-ui/icons/Favorite";
//import IconButton from "@material-ui/core/IconButton";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textobuttonv: {
    color: "white",
  },
});

class Album extends React.Component {
  async agregarFavorito(id, e) {
    e.preventDefault();
    let cookies = new Cookies();
    let iduser = cookies.get("id");
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + "/events/setfavorito";
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: { id: iduser }, evento: { id } }),
    };
    let user = await fetch(url_web, requestOptions);
    let data = await user.json();

    window.alert("se agrego a favoritos");
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                JoinEvents
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Conoce un mundo nuevo de eventos, explora, participa y
                diviertete.
              </Typography>
            </Container>
          </div>
          <Container maxWidth="md">
            <h2>Ultimos Eventos</h2>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.props.cards.map((card) => (
                <Grid item key={card._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="./images/gallery/2.jpg"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.nombre}
                      </Typography>
                      <Typography>{card.descripcion}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={this.agregarFavorito.bind(this, card._id)}
                        color="secondary"
                      >
                        Favorito
                        <FavoriteIcon />
                      </Button>
                      <Button variant="contained" size="small" color="primary">
                        <Link
                          className={classes.textobuttonv}
                          to={`/eventdetails/${card._id}`}
                        >
                          ver más
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            JoinEvents
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Esperamos la pagina sea de tu gusto!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
