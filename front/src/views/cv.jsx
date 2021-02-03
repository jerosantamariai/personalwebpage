import React from 'react';
import JSMIFoto from '../img/JSMIFoto.png'
import CV_jerosantamariai from '../documents/CV_jerosantamariai.pdf';

const CV = props => {
    return (
        <div className="cvtainer">
            <div className="row py-3 d-flex justify-content-center">
                <div className="col-sm-12 col-md-4 py-5 d-flex justify-content-center">
                    <img className="JSMIFoto" src={JSMIFoto} alt="JSMIFoto" style={{ width: 200 }} />
                </div>
                <div className="col-sm-12 col-md-6 my-auto pb-5 d-flex justify-content-center">
                    <div className="col-8">
                        <p className="d-flex justify-content-center">Puedes descargar mi CV aquí:</p>
                        <a className="btn btn-info d-flex justify-content-center" href={CV_jerosantamariai} download><i className="fas fa-cloud-download-alt fa-lg pt-1" />&nbsp;&nbsp;&nbsp;&nbsp;Descargar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;