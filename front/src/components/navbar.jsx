import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg personalColor no-gutters">
            <Link className="navbar-brand no-gutters" to="/"><strong>&lt;JSMI /&gt;</strong></Link>
            <button className="navbar-toggler no-gutters" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse no-gutters" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto no-gutters">
                    <li className="nav-item no-gutters">
                        <Link className="nav-link" to="/conoceme">Conoceme!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cv">Curriculum</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <Link className="dropdown-item" to="#">Something else here</Link>
                        </div>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;