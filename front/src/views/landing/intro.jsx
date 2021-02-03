import React from 'react';
import JeroBrazos from '../../img/jeroBrazos.png'

const Intro = props => {
    return (
        <div className="introcontainer d-flex">
            <div className="row mx-auto py-5">
                <div className="col-sm-12 col-md-6 d-flex py-5 justify-content-center">
                    <img src={JeroBrazos} alt="Jero" className="introphoto" style={{ width: 400 }} />
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center my-auto introhi">
                    <div>
                        <h2 className="text-center">¡Hola! Me llamo</h2>
                        <h2 className="text-center">JERÓNIMO SANTA MARÍA ILLANES</h2>
                        <h3 className="text-center my-5">¡Bienvenidos a mi sitio web!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;