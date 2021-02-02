import React from 'react';
import JeroBrazos from '../../img/jeroBrazos.png'

const Intro = props => {
    return (
        <div className="introcontainer d-flex">
            <div className="col-6 d-flex justify-content-center">
                <img src={JeroBrazos} alt="Jero" className="introphoto" style={{width: 400}}/>
            </div>
            <div className="col-6 d-flex justify-content-center my-auto introhi">
                <div>
                    <h2 className="text-center">HOLA! Me llamo</h2>
                    <h2 className="text-center">JERÓNIMO SANTA MARÍA ILLANES</h2>
                    <h3 className="text-center">Binvenidos a mi sitio web</h3>
                </div>
            </div>
        </div>
    );
}

export default Intro;