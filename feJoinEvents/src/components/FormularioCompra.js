import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
/*import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';*/
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  precio: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));


export default function FormularioCompra() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dettalles de evento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Evento 1
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.listItem}>
            Decripción del evento
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Cantidad"
            name="cantidad"
            label="Cantidad de Entradas"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={classes.Precio}>
            Precio por entrada
          </Typography>
          <Typography variant="subtitle1" className={classes.Precio}>
            s/.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={classes.Precio}>
            Fecha
          </Typography>
          <Typography variant="subtitle1" className={classes.Precio}>
            dd/mm/aa
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={classes.Precio}>
            Hora
          </Typography>
          <Typography variant="subtitle1" className={classes.Precio}>
            hh:mm
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
