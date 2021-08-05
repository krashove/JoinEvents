import React from 'react';

// components
import FormularioEvento from '../components/FormularioEvento';
import Review from '../components/Review';
import CargarImagenEvento from '../components/CargarImagenEvento';

// context
import MyProvider from '../context/ProviderEvente'

class StepNewEvent extends React.Component {

    render(){
        return(
            <React.Fragment>
                <MyProvider>
                    <FormularioEvento clases={this.props.clases} />
                    <CargarImagenEvento clases={this.props.clases} />
                    <Review clases={this.props.clases} />
                </MyProvider>
            </React.Fragment>
        )
    }
}

export default StepNewEvent;