import React from 'react';
import {useParams} from "react-router-dom";

import NewPassw from '../components/NewPassw';

function ResetPass() {

    const { id } = useParams();

    return (
        <div>
            <NewPassw idUser={id} />
        </div>
    );
}

export default ResetPass;