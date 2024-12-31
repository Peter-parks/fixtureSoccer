import "./Section.css";
import logo from "../section/bannerImg.jpg";
import React from "react";

const Section = () => {
  return (
    <div className="section-container">
      <img src={logo} alt="Banner del Torneo" className="banner" />
      <div className="section-header">
        <h2>¡Bienvenidos al Torneo de Fútbol Definitivo!</h2>
        <div className="section-content">
          <p>
            Prepárate para una experiencia emocionante mientras equipos de todas
            partes compiten por el título de campeones. Este torneo no se trata
            solo de ganar; se trata de mostrar tus habilidades, trabajo en
            equipo y pasión por el juego.
          </p>
          <p>
            Cada partido será una prueba de estrategia, resistencia y
            determinación. Animamos a todos los equipos a dar lo mejor de sí y
            jugar con espíritu deportivo. Recuerda, ¡cada gol te acerca más a la
            gloria!
          </p>
          <p>
            Los campeones no solo ganarán el prestigioso trofeo, sino que
            también recibirán increíbles premios que celebran su arduo trabajo y
            dedicación. Así que prepárate, mantente enfocado y apunta a la cima.
            El camino hacia la victoria está lleno de desafíos, pero las
            recompensas valen la pena.
          </p>
          <p>
            Que el mejor equipo gane y deje su nombre en la historia de este
            gran torneo. ¡Buena suerte a todos los participantes!
          </p>
        </div>
        <button className="section-button">Inscribirme</button>
      </div>
    </div>
  );
};

export default Section;
