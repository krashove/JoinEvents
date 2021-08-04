import React from 'react';
import {Grid, Typography, Paper, Stepper, Step, StepLabel, Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {ContextEvent} from '../context/ProviderEvente'

class Review extends React.Component {
  render() {
    /*const products = [
      { name: 'Titulo', desc: 'Compañia'},
      { name: 'Etiquetas', desc: 'etiquetas añadidas...'},
      { name: 'Descripción', desc: 'Descripción del evento...'},
      { name: 'Fecha', desc: 'Fecha puesta anteriormente...'},
      { name: 'Hora', desc: 'hora de inicio de evento...'},
      { name: 'Empresa', desc: 'Proveedor...'},
      { name: 'Ubicación', desc: 'en caso de querer una mejor publiciad se seleccioan ambas opciones'},
    ];*/
    const Nota = ['Al pulsar en "confirmar" se publicara el evento con los detalles dispuestos previamente, revizar bien antes de pulsar en "corfirmar".'];

    return (
      <ContextEvent.Consumer>
        {(context) => (
          <div>
            {context.state.activeStep === 2 || context.state.activeStep === 3 ? 
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
              {context.state.activeStep === context.state.steps.length ? (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom> El evento a sido registrado. </Typography>
                    <Typography variant="subtitle1"> La notificación de confirmación llegara a su correo en breves momentos. </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography variant="h6" gutterBottom>
                    Detalles
                  </Typography>
                  <List disablePadding>
                    {context.state.products.map((product) => (
                      <ListItem className={this.props.clases.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                      </ListItem>
                    ))}
                    <ListItem className={this.props.clases.listItem}>
                      <ListItemText primary="Precio de entrada" />
                      <Typography variant="subtitle1" className={this.props.clases.total}>
                        s/. {context.state.precio}
                      </Typography>
                    </ListItem>
                  </List>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" gutterBottom className={this.props.clases.title}>Precausión: </Typography>
                      <Typography gutterBottom>{Nota.join(', ')}</Typography>
                    </Grid>
                  </Grid>
                  <div className={this.props.clases.buttons}>
                    <Button onClick={context.handleBack} className={this.props.clases.button}>Atras</Button>
                    <Button variant="contained"
                            color="primary"
                            onClick={context.createEvento}
                            className={this.props.clases.button} >
                      Confirmar
                    </Button>
                  </div>
                </React.Fragment>
              )}
              
          </Paper>
          :''}
          </div>
        )}
      </ContextEvent.Consumer>
    );
  }
}

export default Review;