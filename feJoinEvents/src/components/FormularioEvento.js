import React from 'react';
import {Grid, Typography, TextField, FormControlLabel, Radio, RadioGroup, Paper, Stepper, Step, StepLabel, Button} from '@material-ui/core';

import {ContextEvent} from '../context/ProviderEvente'

class FormularioEvento extends React.Component {
  render(){
    return (
      <ContextEvent.Consumer>
        {(context) => (
          <div>
            {context.state.activeStep === 0 ? 
          <Paper className={this.props.clases.paper}>
            <Typography component="h1" variant="h4" align="center">
                Nuevo Evento
            </Typography>
            <Stepper activeStep={context.state.activeStep} className={this.props.clases.stepper}>
              {context.state.steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Typography variant="h6" gutterBottom>Ubicación</Typography>
            <RadioGroup row onChange={context.handleChange}  defaultValue="Normal" aria-label="Ubicación" name="tipoEvento">
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
                  onChange={context.handleChange}
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
                  onChange={context.handleChange}
                  id="Etiquetas"
                  name="etiquetas"
                  label="Etiquetas"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={context.handleChange}
                  id="Descripción"
                  name="descripcion"
                  label="Descripción"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  onChange={context.handleChange}
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
                  onChange={context.handleChange}
                  id="Hora"
                  name="hora"
                  label ="Hora"
                  fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={context.handleChange}
                  required
                  id="Cantidad"
                  name="cantidad"
                  label="Cantidad"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  onChange={context.handleChange}
                  id="Precio"
                  name="precio"
                  type="number"
                  label="Precio de entrada: s/. "
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className={this.props.clases.buttons}>
              <Button variant="contained"
                      color="primary"
                      onClick={context.handleNext}
                      className={this.props.clases.button} >
                Siguiente
              </Button>
            </div>
          </Paper>
          :''}
          </div>
        )}
      </ContextEvent.Consumer>
    );
  }
}

export default FormularioEvento;
