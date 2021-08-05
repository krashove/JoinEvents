import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Navibar from "../components/navibar.js";
import { makeStyles } from "@material-ui/core/styles";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
//import Palette from "@material-ui/icons/Palette";
import PersonIcon from "@material-ui/icons/Person";

import styles from "../components/profilePage.js";
import Parallax from "../components/Parallax.js";
import InfoUser from "../components/infoUser.js";


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {

  const clases = useStyles();
  //const { ...rest } = props;
  const imageClases = classNames(
    clases.imgRaised,
    clases.imgRoundedCircle,
    clases.imgFluid
  );

  //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <React.Fragment>
      <div>
        <Navibar route="Profile" iconRoute={<PersonIcon />} />
      </div>
      <Parallax small filter image={require("../components/images/profile/profile-bg.jpg").default} />
      <div>
        <div className={classNames(clases.main, clases.mainRaised)}>
          <div>
            <div className={clases.container}>
              <InfoUser classes ={clases} imageClasses={imageClases} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
/*
<Button size="small" color="primary">
                        Editar
                      </Button>*/

/*<Button size="large" color="secondary">
                      Generar Evento
                    </Button>*/