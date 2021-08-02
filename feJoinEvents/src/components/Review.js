import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Titulo', desc: 'Compañia'},
  { name: 'Etiquetas', desc: 'etiquetas añadidas...'},
  { name: 'Descripción', desc: 'Descripción del evento...'},
  { name: 'Fecha', desc: 'Fecha puesta anteriormente...'},
  { name: 'Hora', desc: 'hora de inicio de evento...'},
  { name: 'Empresa', desc: 'Proveedor...'},
  { name: 'Ubicación', desc: 'en caso de querer una mejor publiciad se seleccioan ambas opciones'},
];
const Nota = ['Al pulsar en "confirmar" se publicara el evento con los detalles dispuestos previamente, revizar bien antes de pulsar en "corfirmar".'];


const useStyles = makeStyles((theme) => ({
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

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalles
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Precio de entrada" />
          <Typography variant="subtitle1" className={classes.total}>
            s/. ....
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Precausión:
          </Typography>
          <Typography gutterBottom>{Nota.join(', ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
