import React from 'react';
import JeroBrazos from '../../img/jeroBrazos.png'

const Intro = props => {
    return (
        <div className="introcontainer d-flex no-gutters">
            <div className="row mx-auto py-3 no-gutters">
                <div className="col-12 col-sm-6 d-flex py-5 justify-content-center no-gutters">
                    <img src={JeroBrazos} alt="Jero" className="introphoto no-gutters" style={{ width: 400 }} />
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-center px-2 my-auto introhi no-gutters">
                    <div>
                        <h2 className="text-center no-gutters">¡Hola! Me llamo</h2>
                        <h1 className="text-center no-gutters">JERÓNIMO SANTA MARÍA ILLANES</h1>
                        <h3 className="text-center my-5 no-gutters">¡Bienvenidos a mi sitio web!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;