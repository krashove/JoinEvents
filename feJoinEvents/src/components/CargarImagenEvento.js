import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Typography, Paper, Stepper, Step, StepLabel, Button} from '@material-ui/core';

import {ContextEvent} from '../context/ProviderEvente'

class UploadButtons extends React.Component {

  render(){

    return (
      <ContextEvent.Consumer>
        {(context) => (
          <div>
            {context.state.activeStep === 1 ? 
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
                <div className={this.props.clases.root}>
                  <input
                    accept="image/*"
                    className={this.props.clases.inputSelect}
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => context.convertirBase64(e.target.files)}
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    Subir Imagen <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
                <div className={this.props.clases.buttons}>
                  <Button onClick={context.handleBack} className={this.props.clases.button}>Atras</Button>
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

export default UploadButtons;