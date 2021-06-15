import React from "react";
import "./scrollSections.scss";
import blueCollar from "../../../images/blue-collar.png";
import blackBlueCollar from "../../../images/black-blue-2.png";
import collarsHome from "../../../images/collars-home.png";
import CollarCollection from "../collarCollection";

import BgIntro1 from "./img/bgIntro1";
import BgIntro2 from "./img/bgIntro2";
import BgIntro3 from "./img/bgIntro3";
import EmpoderarIntro from "../empoderarIntro";
import PlacaIntro from "../placaIntro";
import Footer from "../../footer/footer";
import { Link } from "gatsby";
import BgCollarsHome from "./img/bgCollarsHome";

const SectionScroll = () => {
  return (
    <div className="container-scroll">
      <div className="section-scroll">
        <div className="fixed">
          <div className="flex-container">
            <img
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="1000"
              src={blueCollar}
              alt=""
            />
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="1000"
              className="text-div"
            >
              {" "}
              <h1>Una conexión única, nuevos límites.</h1>
              <p>
                Potencia el estilo de vida de tu perro y atrévete a experimentar
                nuevos límites.
              </p>
              <div className="buttons">
                <button style={{ backgroundColor: "#D9DADD", color: "black" }}>
                  <Link to="/collar">Saber más</Link>
                </button>{" "}
                <button>
                  <Link style={{ color: "white" }} to="/book">
                    Reserva
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="fixed">
          <div className="flex-container">
            <img src={blackBlueCollar} alt="" />
            <div className="text-div">
              {" "}
              <h1>Desde cualquier lugar siempre conectado a ti.</h1>
              <p>Que la distancia no te aleje de estar cerca de tu perro.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed">
          <BgCollarsHome>
            <div className="flex-container-bg">
              <div className="text-div">
                {/* {" "}
                <h1>Un collar para una vida activa y saludable</h1>
                <p>
                  Conviértete en su entrenador personal y mide su actividad.
                </p> */}
              </div>
            </div>
          </BgCollarsHome>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed">
          <EmpoderarIntro />
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro1>
            <div className="flex-container-bg">
              <div className="text-div">
                {" "}
                <h1>No lo pierdas.</h1>
                <p>
                  Localizador GPS para saber donde está en todo momento y alerta
                  por si tu perro sale de la zona que has marcado como segura.
                </p>
                <Link to="/collar-perro">
                  <button>Saber más</button>
                </Link>
              </div>
            </div>
          </BgIntro1>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro2>
            <div className="flex-container-bg">
              <div className="text-div">
                {" "}
                <h1>Motívale a llevar una vida mejor.</h1>
                <p>
                  Registro de actividad para que tu perro alcance sus objetivos
                  de ejercicio.
                </p>
                <Link to="/collar-perro">
                  <button>Saber más</button>
                </Link>
              </div>
            </div>
          </BgIntro2>
        </div>
      </div>
      <div className="section-scroll">
        <div className="p fixed" style={{ width: "100vw" }}>
          <BgIntro3>
            <div className="flex-container-bg">
              <div className="text-div">
                {" "}
                <h1>Anticípate a los problemas.</h1>
                <p>
                  Registro de sus hábitos cotidianos para anticiparte a futuros
                  problemas de salud.
                </p>
                <Link to="/collar-perro">
                  <button>Saber más</button>
                </Link>
              </div>
            </div>
          </BgIntro3>
        </div>
      </div>

      <div className="section-scroll-last">
        <CollarCollection />
        <PlacaIntro />
        <Footer />
      </div>
    </div>
  );
};

export default SectionScroll;
