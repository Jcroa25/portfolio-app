import React from "react";
import './styles/Header.css';
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = ( ) => {
    return (
        <div className="header">
            <div className="header_logo">
                <h1>JuanCarlos Roa</h1>
            </div>
            <nav>
                <ul>
                    <div className="closed">
                        <Close className="close"/>
                    </div>
                    <li>
                        <Link>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header