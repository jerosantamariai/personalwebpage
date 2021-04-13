import React from 'react';
import ABrucher from '../../img/experience/andreabrucher.png';
import PPyme from '../../img/experience/protegepyme.png';
import CHube from '../../img/experience/conihube.png';

const Port = props => {
    return(
        <div className="portainer">
            <h1>Han confiado en mi:</h1>
            <div className="row">
                <div className="col-12 text-center my-5">
                    <a href="http://www.andreabrucher.cl" target="_blank" rel="noreferrer"><img src={ABrucher} alt="AndreaBrucher" className="portimg" /></a>
                    <a href="http://www.protegepyme.com" target="_blank" rel="noreferrer"><img src={PPyme} alt="ProtegePyme" className="portimg" /></a>
                    <a href="http://www.constanzahube.cl" target="_blank" rel="noreferrer"><img src={CHube} alt="ConstanzaHube" className="portimg" /></a>
                </div>
            </div>
        </div>
    );
}

export default Port;