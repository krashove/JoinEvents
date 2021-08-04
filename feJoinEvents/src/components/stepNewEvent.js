import React from 'react';
import {Paper, Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core';

import FormularioEvento from '../components/FormularioEvento';
import Review from '../components/Review';
import CargarImagenEvento from '../components/CargarImagenEvento';

class StepNewEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeStep: 0,
                        steps : ['Detalles del Evento', 'Cargar Imagen', 'Revición Final']};
    
    }

    handleNext = () => {
        this.setState({activeStep: this.state.activeStep + 1});
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1});
    };

    getStepContent = (step)=> {
        switch (step) {
          case 0:
            return <FormularioEvento />;
          case 1:
            return <CargarImagenEvento />;
          case 2:
            return <Review />;
          default:
            throw new Error('Unknown step');
        }
    }

    render(){
        return(
            <React.Fragment>
                <Paper className={this.props.clases.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Nuevo Evento
                    </Typography>
                    <Stepper activeStep={this.state.activeStep} className={this.props.clases.stepper}>
                        {this.state.steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {this.state.activeStep === this.state.steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                            El evento a sido registrado.
                            </Typography>
                            <Typography variant="subtitle1">
                            La notificación de confirmación llegara a su correo en breves momentos.
                            </Typography>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            {this.getStepContent(this.state.activeStep)}
                            <div className={this.props.clases.buttons}>
                            {this.state.activeStep !== 0 && (
                                <Button onClick={this.handleBack} className={this.props.clases.button}>
                                Atras
                                </Button>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleNext}
                                className={this.props.clases.button}
                            >
                                {this.state.activeStep === this.state.steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                            </Button>
                            </div>
                        </React.Fragment>
                        )}
                    </React.Fragment>
                    </Paper>
            </React.Fragment>
        )
    }
}

export default StepNewEvent;