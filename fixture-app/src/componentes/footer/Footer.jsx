import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Redes Sociales</h4>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contacto</h4>
                <p>Correo: contacto@torneo.com</p>
                <p>Teléfono: +123 456 7890</p>
                <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                <p>Web: <a href="https://www.torneo.com">www.torneo.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;