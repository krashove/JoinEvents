import React from "react";
import Cookies from 'universal-cookie';

export const ContextEvent = React.createContext()

class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   tipoEvento: 'Normal',
                    nombre: 'Nombre de Evento',
                    cantidad: 'Cantidad',
                    hora: 'Hora',
                    fecha: 'Fecha',
                    descripcion: 'Descripción',
                    etiquetas: 'Etiquetas',
                    precio: 'Precio',
                    mensaje: '' ,
                    activeStep: 0,
                    steps : ['Detalles del Evento', 'Cargar Imagen', 'Revición Final'],
                    products : [],
                    imagen: ''   };
    }
    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

    createEvento = async () =>{
        let cookies = new Cookies();
        let usertoken = cookies.get('token')
        let arrfec = this.state.fecha.split('//')
        let formatfec = arrfec[2] + '-' + arrfec[1] + '-' + arrfec[0]
        var mydate = new Date(formatfec);

        let url_web = process.env.REACT_APP_URL_WEBSERVICE + '/events/create'
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ proveedor: {
                token: usertoken
            },
            evento:{
                descripcion: this.state.descripcion,
                nombre: this.state.nombre,
                fechaInicio: mydate,
                fechaFinal: (mydate+5),
                precio: this.state.precio,
                cantEntradas: this.state.cantidad, 
                tipoEvento: this.state.tipoEvento,
                imagen: this.state.imagen
            } })
        }

        console.log(requestOptions)

        let user = await fetch( url_web, requestOptions)
        let data = await user.json();

        this.setState({mensaje: data.evento._id});
    }

    handleNext = () => {
        this.setState({activeStep: this.state.activeStep + 1});
        if((this.state.activeStep + 1) === 2){
            let arr = []
            let itm = { name: 'Titulo', desc: this.state.nombre }
            arr.push(itm)

            itm = { name: 'Etiquetas', desc: this.state.etiquetas }
            arr.push(itm)

            itm = { name: 'Descripción', desc: this.state.descripcion }
            arr.push(itm)

            itm = { name: 'Fecha', desc: this.state.fecha }
            arr.push(itm)

            itm = { name: 'Hora', desc: this.state.hora }
            arr.push(itm)

            /*itm = { name: 'Empresa', desc: this.state.nombre }
            arr.push(itm)*/

            itm = { name: 'Ubicación', desc: this.state.tipoEvento }
            arr.push(itm)
            
            this.setState({products: arr});
        }
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1});
    };

    convertirBase64 = async (archivos) => {
        let file = Array.from(archivos)[0]
        let result_base64 = await new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = (e) => resolve(fileReader.result);
            fileReader.readAsDataURL(file);
        });
    
        this.setState({imagen: result_base64})
        /*Array.from(archivos).forEach( archivo => {
          let reader = new FileReader()
          reader.readAsDataURL(archivo)
          reader.onload = function(){
            let base64 = reader.result
            console.log(base64)
            
          }
        })*/
    }
                
    render(){
        return(
            <ContextEvent.Provider value={{state: this.state, handleChange: this.handleChange, createEvento: this.createEvento,
                                        handleNext: this.handleNext, handleBack: this.handleBack, convertirBase64: this.convertirBase64 }}>
                {this.props.children}
            </ContextEvent.Provider>
        )
    }
}

export default MyProvider;