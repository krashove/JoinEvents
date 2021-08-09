import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
/*import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';*/

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Forma de Pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Nombre de la tarjeta"
            fullWidth
            autoComplete="cc-name"
            onChange={props.onChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Numero de tarjeta"
            fullWidth
            autoComplete="cc-number"
            onChange={props.onChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Fecha de Expiración"
            fullWidth
            autoComplete="cc-exp"
            onChange={props.onChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Los 3 dígitos en la parte de atras de la tarjeta"
            fullWidth
            autoComplete="cc-csc"
            onChange={props.onChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
