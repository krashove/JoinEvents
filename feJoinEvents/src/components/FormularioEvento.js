import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function FormularioEvento() {
  const [state, setState] = React.useState({
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Ubicación
      </Typography>
      <FormControlLabel
        control={
          <Checkbox name="checkedC"
            color="primary"
          />
        }
        label="Normal"
      />

      <FormControlLabel

        control={
          <Checkbox name="checkedC"
            color="primary"
          />
        }
        label="Destacado"
      />



      <Typography variant="h6" gutterBottom>
        Evento Nuevo
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombre de Evento"
            name="Nombre de Evento"
            label="Nombre de Evento"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Etiquetas"
            name="Etiquetas"
            label="Etiquetas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Descripción"
            name="Descripción"
            label="Descripción"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Fecha"
            name="Fecha"
            label="Fecha"
            fullWidth
            autoComplete="bday"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Hora"
            name="Hora"
            label ="Hora"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Empresa"
            name="Empresa"
            label="Empresa"
            fullWidth
            autoComplete="organization"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Precio"
            name="Precio"
            label="Precio de entrada: s/. "
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
