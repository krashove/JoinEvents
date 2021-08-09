import React from "react";
import moment from "moment";
import Navibar from "../components/navibar.js";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import CssBaseline from "@material-ui/core/CssBaseline";
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
//import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import FormularioCompra from "../components/FormularioCompra";
import FormaDePago from "../components/FormaDePago";
import ReviewPago from "../components/ReviewPago";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Detalles de evento", "Forma de pago", "Reviza tu orden"];

function getStepContent(step, evento) {
  switch (step) {
    case 0:
      return <FormularioCompra evento={evento} />;
    case 1:
      return <FormaDePago />;
    case 2:
      return <ReviewPago />;
    default:
      throw new Error("Unknown step");
  }
}

export default function ParticiparEvento(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [eventoData, setEventoData] = React.useState({
    evento: {
      id: "",
      img: "../images/background/11.jpg",
      fecha: "05/08",
      titulo: "Blockchain",
      detalles:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, excepturi optio vel esse at reiciendis ut nesciunt hic modi voluptatum quae facilis quo, itaque distinctio. Facilis doloremque debitis minima dolorum.",
      precio: "$1.99",
      origen: "TEDx",
      hora: "20:00",
      plataforma: "Amazon Prime",
      // twitter: "https://twitter.com/TEDx",
    },
    // load: false,
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  React.useEffect(() => {
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + "/events/getinfo";
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: "acbacnaic" },
      body: JSON.stringify({ evento: { id: props.parametros.id } }),
    };

    const fetchData = async () => {
      try {
        const user = await fetch(url_web, requestOptions);
        const data = await user.json();
        const fechaInicio = moment(data.evento.fechaInicio).format("DD[-]M");
        const hora = moment(data.evento.fechaInicio).format("hh:mm");

        setEventoData({
          evento: {
            id: data.evento._id,
            img: data.evento.imagen,
            fecha: fechaInicio,
            hora: hora,
            titulo: data.evento.nombre,
            detalles: data.evento.descripcion,
            precio: data.evento.precio,
            origen: data.proveedor.nombre,
            plataforma: data.proveedor.plataforma,
          },
        });
        // setEventoData({ evento: { load: true } });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Navibar route="Participar Evento" iconRoute={<CreateIcon />} />
      </div>

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Detalles de Compra
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por su preferencia.
                </Typography>
                <Typography variant="subtitle1">
                  Tu codigo de entrada es #316351351, guardalo muy bien y que
                  disfrutes del evento
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, eventoData.evento)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atras
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Confirmar"
                      : "Siguiente"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
