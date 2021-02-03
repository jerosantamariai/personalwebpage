import React from 'react';
import JeroMac from '../img/JeroMac.png';

const KnowMe = props => {
    return (
        <div className="KMTainer d-flex py-5">
            <div className="col-4 my-auto">
                <img className="JeroMac" src={JeroMac} alt="JeroMac" style={{ width: 450 }} />
            </div>
            <div className="col-8">
                <p>Soy Ingeniero Comercial, Desarrollador FullStack y certificado en Metodologías Ágiles como Product Owner y Scrum Master. Durante mi carrera profesional estuve a cargo en las diferentes etapas de la implementación tecnológica como el desarrollo de las plataformas eCommerce y aplicaciones para generar el Data Mining necesario para la toma de decisiones.</p>
                <p>Me fui especializando en la tecnología, además de llevar muchos años practicando las metodologías ágiles en diversos campos, gracias a que en todas mis experiencias fui tanto el demandante como el oferente de información. Completa mi perfil el liderazgo de equipos de trabajo y la negociación con los diversos stakeholders de la empresa.</p>
                <p>Con el tiempo me fui interesando cada vez más en el mismísimo desarrollo, con el objetivo de ser un gran comunicador entre el cliente y el equipo de desarrollo de manera de lograr todos los objetivos que se tengan planteados y así fue como fui adquiriendo conocimientos en HTML, CSS, JavaScript/React, Python/Flask, SQL/MySQL, entre muchos otros frameworks y librerías que me permite tener los conocimientos y habilidades profesionales, técnicos y humanos para hacer un trabajo eficiente y ágil.</p>
                <hr />
                <h4><strong>CONTINUA SIGUIENDO ESTA PAGINA! CONSTANTEMENTE ESTARÉ SUBIENDO MÁS INFORMACIÓN</strong></h4>
            </div>
        </div>
    );
}

export default KnowMe;