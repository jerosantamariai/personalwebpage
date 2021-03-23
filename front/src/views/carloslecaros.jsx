import React from 'react';
import HTML from '../img/carloslecaros/html.png';
import CSS from '../img/carloslecaros/css.png';
import JS from '../img/carloslecaros/js.png';
import NodeJS from '../img/carloslecaros/nodejs.png';
import ReactLogo from '../img/carloslecaros/react.png';
import BootstrapLogo from '../img/carloslecaros/bootstrap.png';
import JQuery from '../img/carloslecaros/jquery.png';
import Popper from '../img/carloslecaros/popperjs.png';
import LogoPP from '../img/carloslecaros/logoProtegePyme.png';
import AndreaBrucher from '../img/carloslecaros/yomeatrevo-largo.png';
import ConiHube from '../img/carloslecaros/logoconihube.png';

const CarlosLecaros = props => {
    return (
        <div className="containerCL">
            <div className="infoCL mx-auto my-auto p-5">
                <div className="row no-gutters">
                    <div className="col-12 text-justify">
                        <h1>PRESUPUESTO LANDING PAGE</h1>
                        <h3><strong>Cliente:</strong> Carlos Lecaros Donoso</h3>
                        <h3><strong>Tipo Proyecto:</strong> Landing Page, Responsivo</h3>
                        <h3><strong>Gráficas y Contenido:</strong> A cargo del cliente</h3>
                        <br />
                        <h4>¿QUÉ ES UN LANDING PAGE?</h4>
                        <p>Un Landing Page es una página web diseñada para que el usuario recorra el sitio de forma intuitiva con el solo hecho de hacer scroll. De esta forma, el cliente puede ir descubriendo diferentes contenidos a medida que avanza por ella, pudiendo interactuar con los contenidos, y sobretodo, permite una fluida comunicación con los clientes ya que puede estar enlazada a las diferentes Redes Sociaales del cliente.</p>
                        <br />
                        <h4><strong>TECNOLOGÍA</strong></h4>
                        <p>Para la realización de un Landing Page, se ofrece trabajar con los lenguajes de programación, framworks y librerías como son HTML5, CSS3, JavaScript, React, Bootstrap, JQuery, Popper entre otras más dependiendendo de las necesidades que vayan surgiendo.</p>
                        <div className="col-12 text-center">
                            <img src={HTML} alt="html" className="logoimg" />
                            <img src={CSS} alt="css" className="logoimg" />
                            <img src={JS} alt="js" className="logoimg" />
                            <img src={NodeJS} alt="nodejs" className="logoimg" />
                            <img src={ReactLogo} alt="react" className="logoimg" />
                            <img src={BootstrapLogo} alt="bootstrap" className="logoimg" />
                            <img src={JQuery} alt="jquery" className="logoimg" />
                            <img src={Popper} alt="popper" className="logoimg" />
                        </div>
                        <h4><strong>PRESUPUESTO</strong></h4>
                        <p>Los honorarios por la realización de dicha plataforma tiene un valor de $ 300.000 liquídos, en donde adicionalmente, se hará una revision SEO y completa de la página y la forma de trabajo será la siguiente:</p>
                        <ol>
                            <li><strong>Primera Semana:</strong> Planificación, ensamblaje de una maqueta oficial y evaluación del número de componentes/slides que tendrá la página.</li>
                            <li><strong>Segunda Semana:</strong> Se trabajará diariamenteen cada componentes/slides que tendrá la página.</li>
                            <li><strong>Tercera Semana:</strong> Retroalimentación del resultado de la página web.</li>
                        </ol>
                        <p>Trabajos adicionales de baja especialización, tiene un valor de $ 20.000 la hora. Se puede entregar un servicio adicional, que consta de 20 trabajos adicionales de baja especialización por 2 años por un monto de $ 300.000 líquidos.</p>
                        <h4><strong>PORTAFOLIO</strong></h4>
                        <div className="text-center">
                            <a href="http://www.protegepyme.com" target="_blank" rel="noreferrer"><img src={LogoPP} alt="ProtegePyme" className="portimg" /></a>
                            <a href="http://www.andreabrucher.cl" target="_blank" rel="noreferrer"><img src={AndreaBrucher} alt="AndreaBrucher" className="portimg" /></a>
                            <a href="http://www.constanzahube.cl" target="_blank" rel="noreferrer"><img src={ConiHube} alt="ConstanzaHube" className="portimg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarlosLecaros;