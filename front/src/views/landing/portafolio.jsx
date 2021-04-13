import React from 'react';
import { Link } from 'react-router-dom';
import ABrucher from '../../img/experience/andreabrucher.png';
import PPyme from '../../img/experience/protegepyme.png';
import CHube from '../../img/experience/conihube.png';

const Port = props => {
    return(
        <div className="portainer">
            <h1>Han confiado en mi:</h1>
            <div className="row">
                <div className="col-12 text-center">
                    <img src={ABrucher} alt="" className="portimg" />
                    <img src={PPyme} alt="" className="portimg" />
                    <img src={CHube} alt="" className="portimg" />
                </div>
            </div>
        </div>
    );
}

export default Port;