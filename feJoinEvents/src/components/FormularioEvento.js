import React from 'react';
import {Grid, Typography, TextField, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';

/*const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);*/

class FormularioEvento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  tipoEvento: 'Normal',
                    nombre: 'Nombre de Evento',
                    cantidad: 'Cantidad',
                    hora: 'Hora',
                    fecha: 'Fecha',
                    descripción: 'Descripción',
                    etiquetas: 'Etiquetas',
                    precio: 'Precio'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  };
//export default function FormularioEvento() {
  /*const [state, setState] = React.useState({
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };*/
  render(){
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>Ubicación</Typography>
        <RadioGroup row onChange={this.handleChange}  defaultValue="Normal" aria-label="Ubicación" name="tipoEvento">
          <FormControlLabel
            control={ <Radio /> }
            label="Normal"
            value="Normal" 
          />
          <FormControlLabel
            control={ <Radio /> }
            label="Destacado"
            value="Destacado" 
          />
        </RadioGroup>
        
        <Typography variant="h6" gutterBottom> Evento Nuevo </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={this.handleChange}
              id="Nombre de Evento"
              name="nombre"
              label="Nombre de Evento"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={this.handleChange}
              id="Etiquetas"
              name="etiquetas"
              label="Etiquetas"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.handleChange}
              id="Descripción"
              name="descripción"
              label="Descripción"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={this.handleChange}
              id="Fecha"
              name="fecha"
              label="Fecha"
              fullWidth
              autoComplete="bday"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={this.handleChange}
              id="Hora"
              name="hora"
              label ="Hora"
              fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.handleChange}
              required
              id="Cantidad"
              name="cantidad"
              label="Cantidad"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={this.handleChange}
              id="Precio"
              name="precio"
              label="Precio de entrada: s/. "
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FormularioEvento;
