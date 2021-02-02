import React from 'react';
import CV_jerosantamariai from '../documents/CV_jerosantamariai.pdf'

const CV = props => {
    return(
        <div className="col-4 offset-4">
        <p className="d-flex justify-content-center">Puedes descargar mi CV aquí</p>
        <a className="btn btn-info d-flex justify-content-center" href={CV_jerosantamariai} download><i class="fas fa-cloud-download-alt"></i>   Descargar</a>
        </div>
    );
}

export default CV;