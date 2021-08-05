import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Navibar from "../components/navibar.js";
import Favoritos from '../components/Favoritos';
import { makeStyles } from "@material-ui/core/styles";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Palette from "@material-ui/icons/Palette";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import profile from "../components/images/profile/foto_perfil.jpg";
import styles from "../components/profilePage.js";
import Parallax from "../components/Parallax.js";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <React.Fragment>
      <div>
        <Navibar route="Profile" iconRoute={<MeetingRoomIcon />} />
      </div>
      <Parallax
        small
        filter
        image={require("../components/images/profile/profile-bg.jpg").default}
      />
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Usuario</h3>
                      <h6>Nombre Completo</h6>
                      <h6>correo_ejemplo@abc.com</h6>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                    </div>
                    <Button size="large" color="secondary">
                      Generar Evento
                    </Button>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Este es tu espacio, disfruta de tus eventos
                  favoritos las veces que quieras, con solo presionar un botón.{" "}
                </p>
              </div>
              <div>
                < Favoritos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
