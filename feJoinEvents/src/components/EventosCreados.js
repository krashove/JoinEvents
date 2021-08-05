import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import GridContainer from "../components/Grid/GridContainer.js";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

//const cards = [1, 2, 3, 4, 5, 6];

export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
      <GridContainer justifyContent="center">
        <div className={classes.name}>
          <h3 className={classes.title}>EVENTOS CREADOS</h3>
        </div>
      </GridContainer>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {props.creados.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={(!card.imagen)? "./images/gallery/3.jpg" : card.imagen  }
                    title="Image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2"> {card.nombre} </Typography>
                    <Typography>
                      {card.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver mas
                    </Button>
                    <Button size="small" color="secondary">
                      Eliminar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
