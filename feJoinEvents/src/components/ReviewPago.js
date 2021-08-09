import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const products = [
  {
    name: "Evento 1",
    desc: "%desc por memb",
    dato: "s/. precio sin descuento",
  },
  { name: "Fecha y Hora", desc: "Fecha ", dato: "horario de evento" },
];
const nota = [
  'Al pulsar en "confirmar" acepta que ha revizado todos los campos de la compra',
];

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

export default function ReviewPago(props) {
  const classes = useStyles();
  const [detalleCompra, setDetalleCompra] = React.useState();
  const producto = [
    {
      id: props.evento.id,
      titulo: props.evento.titulo,
      desc: "%desc por memb",
      precio: props.evento.precio,
    },
    {
      id: props.evento.id,
      titulo: "Fecha",
      desc: props.evento.fecha,
      precio: props.evento.hora,
    },
  ];
  console.log(producto.titulo);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalles de pedido
      </Typography>
      <List disablePadding>
        {producto.map((product) => (
          <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.titulo} secondary={product.desc} />
            <Typography variant="body2">{product.precio}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            s/. cantidad a pagar (con descuento aplicado)
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Nota:
          </Typography>
          <Typography gutterBottom>{nota.join(", ")}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
