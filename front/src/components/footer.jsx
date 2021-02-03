import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Algo sobre mi...</h6>
                        <p className="text-justify">Soy una persona sumamente amistosa y que gusta mucho compartir con la gente que la rodea. Me gusta mucho trabajar en equipo, y sobretodo, lograr los objetivos que me planteo.</p>
                        <hr/>
                        <p className="text-justify">Sobre mis pasiones se encuentra el deporte (fiel hincha de mi equipo) y del rugby: deporte que jugue más de la mitad de mi vida y que me entregó tantos valores que hoy me representan. Adoro sobre todas las cosas la cocina e siempre invento nuevas formas de ampliar mi menú para hacer a mis amistades sepan lo que es tener una buena mesa y atención.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Blog</h6>
                        <ul className="footer-links">
                            <li>Se viene entretenidos temas de mis experiencias y estudios como:</li>
                            <ol>
                            <li>- Negocios</li>
                            <li>- Economía</li>
                            <li>- Programación</li>
                            <li>- Energías Renovables</li>
                            </ol>
                            {/* <li><Link to="http://scanfcode.com/category/front-end-development/">UI Design</Link></li>
                            <li><Link to="http://scanfcode.com/category/back-end-development/">PHP</Link></li>
                            <li><Link to="http://scanfcode.com/category/java-programming-language/">Java</Link></li>
                            <li><Link to="http://scanfcode.com/category/android/">Android</Link></li>
                            <li><Link to="http://scanfcode.com/category/templates/">Templates</Link></li> */}
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Sitio</h6>
                        <ul className="footer-links">
                            <li className="foot-link"><Link to="/conoceme">Conoceme!</Link></li>
                            <li className="foot-link"><Link to="/cv">Currículum</Link></li>
                            <li>Pronto más novedades!</li>
                            {/* <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link></li>
                            <li><Link to="http://scanfcode.com/privacy-policy/">Privacy Policy</Link></li>
                            <li><Link to="http://scanfcode.com/sitemap/">Sitemap</Link></li> */}
                        </ul>
                    </div>
                </div>
                <hr />
      </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved to <strong>jerosantamariai</strong>.
            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><Link className="linkedin" to="https://www.linkedin.com/in/jerosantamariai/"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link className="github" to="https://github.com/jerosantamariai"><i className="fab fa-github"></i></Link></li>
                                <li><Link className="twitter" to="https://twitter.com/jerosantamariai"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link className="instagram" to="https://www.instagram.com/jerosantamariai/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
</footer>
    );
}

export default Footer;