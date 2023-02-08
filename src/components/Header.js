import React from "react";
import './styles/Header.css';
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
                </ul>
            </nav>
        </div>
    )
}

export default Header