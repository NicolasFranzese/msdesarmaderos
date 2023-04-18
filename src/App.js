import "./whatsapp.css";
import "./App.css";
import Iframe from "react-iframe";
import logo from "././images/logo.ico";
import ford from "./images/ford.png";
import chevrolet from "./images/chevrolet1.png";
import peugeot from "./images/peugeot.png";
import renault from "./images/renault.png";
import audi from "./images/audi.png";
import volkswagen from "./images/volkswagen.png";
import medalla from "./images/medalla.png";
import team from "./images/team.png";
import finanzas from "./images/finanzas.png";
import ubicacion from "./images/ubicacion.png";
import telefono from "./images/telefono2.png";
import clean from "./images/frenteSM.jpg";
import clean2 from "./images/motorsm.jpg";
import desarmadero from "./images/autoSM.jpg";

function App() {
  return (
    <div id="App">
      <div className="section-container first-section">
        <div className="header">
          <img className="image" src={logo} />
        </div>
        <div className="home-container">
          <div>
            <div className="father-text-div">
              <h1 className="font">SM Desarmaderos</h1>
            </div>

            <div className="slogan-div">
              <h2 className="slogan-font">
                Somos una empresa que Nucleamos Desarmaderos de la Provincia de Santa cruz y
                Buenos Aires los cuales se encuentran Habilitados por R.U.D.A.C. (Registro Único de
                Desarmaderos y actividades Conexas)
              </h2>
            </div>
          </div>
          <div>
            <div className="image-container">
              {/* <img className="image-parameters" src={desarmadero}></img> */}
             
              <a target="_blank" href="https://api.whatsapp.com/send?phone=+5492233068025&text=Hola,%20mi%20consulta%20es:" style={{ textDecoration: 'none', color: 'black'}}>
                <div class="whatsapp-chatbox">
                  <header>
                    <div class="avatar"></div>
                    <div>
                      <h3>MSDesarmaderos</h3>
                      <h6>
                        En linea
                      </h6>
                    </div>
                  </header>
                  <div>
                    <div class="chat-bubble">
                      <p>MSDesarmaderos</p>
                      Hola! &#128663;
                      <br />
                      Somos MSDesarmaderos, escribinos tu consulta.
                    </div>
                  </div>
                  <footer>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5492233068025&text=Hola!%20%F0%9F%9A%97%20%0aSomos%20MSDesarmaderos,%20escribinos%20tu%20consulta:%0a">
                      Enviar
                    </a>
                  </footer>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="companies">
          <div className="son-companies">
            <h1 className="tittle-sponsors">ALGUNAS MARCAS</h1>
          </div>
          <div className="images-companies">
            <img className="sponsors" src={ford} />
            <img className="sponsors" src={chevrolet} />
            <img className="sponsors" src={peugeot} />
            <img className="sponsors" src={renault} />
            <img className="sponsors" src={audi} />
            <img className="sponsors" src={volkswagen} />
          </div>
        </div>
      </div>

      <div className="section-container fourth-section">
        <div className="structure">
          <div className="internal-structure">
            <img className="clean-img" src={desarmadero}></img>
          </div>
          <div className="internal-structure">
            <div className="tittle-structure">
              <div className="content-structure">
                <div className="distribution-structure1">
                  <h2 className="tittle-content">
                  AUTOPARTES
                  </h2>
                </div>
                <div className="distribution-structure2">
                  <p className="last-description">
                  En nuestras sucursales contamos con una gran variedad de repuestos de distintas marcas y modelos, debidamente etiquetadas.
                  <br></br>De esta manera le otorgamos al cliente la posibilidad de obtener un repuesto usado,
contribuyendo con la oferta de repuestos a precios accesibles, reduciendo el robo
automotor o delitos asociados a dicha comercialización.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="structure">
          <div className="internal-structure">
            <div className="tittle-structure">
              <div className="content-structure">
                <div className="distribution-structure1">
                  <h2 className="tittle-content">
                    COMPRAR ES FACIL Y SEGURO
                  </h2>
                </div>
                <div className="distribution-structure3">
                  <p className="last-description">
                  Contamos con un excelente servicio de envios a todo el pais,<br></br> transportando el repuesto que necesites hacia tu ciudad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="internal-structure">
            {" "}
            <img className="clean-img" src={clean2}></img>
          </div>
        </div>
        <div className="structure">
          <div className="internal-structure">
            <img className="clean-img" src={clean}></img>
          </div>
          <div className="internal-structure">
            <div className="tittle-structure">
              <div className="content-structure">
                <div className="distribution-structure1">
                  <h2 className="tittle-content">
                    CUIDAMOS EL MEDIO AMBIENTE
                  </h2>
                </div>
                <div className="distribution-structure2">
                  <p className="last-description">
                  En MS desarmaderos nos preocupamos por el cuidado del medio ambiente, todo nuestro proceso cuenta con una gestión responsable y autorizada de los componentes contaminantes.
                   Al recibir los restos de vehículos realizamos la extracción de fluidos contaminantes, dándoles un destino adecuado y ajustado a la normativa vigente.
Una vez finalizada esta etapa se inicia el desarme para hacer una exhaustiva selección de piezas útiles, en base a funcionamiento y estado de conservación.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container second-section">
        <div className="section-identity">
          <div className="tittle-identity">¿Por que elegirnos?</div>

          <div className="presentation">
            <div className="presentation2">
              <div className="description">
                <img className="logo-medal" src={medalla}></img>
              </div>
              <div className="medal-tittle">Amplia variedad de marcas</div>
              <div className="medal-description">
              Todos tus productos en un solo lugar. Actualmente contamos con todas las marcas del mercado, logrando asi brindar la pieza que estes buscando.
              </div>
            </div>
            <div className="presentation2">
              <div className="description">
                <img className="logo-medal" src={team}></img>
              </div>
              <div className="medal-tittle">Cuidamos de nuestros clientes</div>
              <div className="medal-description">
              Eres parte esencial de lo que hacemos en SM Desarmaderos; por eso, nos mantenemos pendientes de lo que necesitas y actuamos para brindarte soluciones relevantes
              </div>
            </div>
            <div className="presentation2">
              <div className="description">
                <img className="logo-medal" src={finanzas}></img>
              </div>
              <div className="medal-tittle">Financiamiento rápido y fácil</div>
              <div className="medal-description">
              En SM Desarmaderos contamos con los precios más accesibles del mercado, junto a
nuestro sistema de venta contamos con una compra optima y veloz.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container third-section">
        <div className="principal-shops">
          <div className="tittle-shops">Nuestras Sucursales</div>
          <div className="shops">
            <div className="individual-shops">
              <div className="city-shops">
                <h4 className="subtitle-shops">EL CALAFATE</h4>
              </div>
              <div className="maps">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.2069900646588!2d-72.27701776148953!3d-50.35450181011389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb0cfaead51d83%3A0x5ec8d9708467f35a!2sAlfredo%20B%C3%B3rquez%2C%20El%20Calafate%2C%20Santa%20Cruz!5e0!3m2!1ses-419!2sar!4v1667485919064!5m2!1ses-419!2sar"
                  className="maps-image"
                />
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Alfredo Borquez 1989, El Calafate 9405, Santa Cruz,
                    Argentina.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">
                    <a href="tel:+5492966767672">+54 9 2966 767672</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="individual-shops">
              <div className="city-shops">
                <h4 className="subtitle-shops">RIO GALLEGOS</h4>
              </div>
              <div className="maps">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9910.259193863543!2d-69.28782306044921!3d-51.612862299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb6fdeec6298649%3A0x2b7b6268038fc48!2sMS%20DESARMADEROS!5e0!3m2!1ses-419!2sar!4v1667486377263!5m2!1ses-419!2sar"
                  className="maps-image"
                />
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Esteban Maradona 958, Rio Gallegos 9400. Santa Cruz,
                    Argentina.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">
                    <a href="tel:+5492966523983">+54 9 2966 523983</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="shops">
            <div className="individual-shops" style={{ width: "100%" }}>
              <div className="city-shops">
                <h4 className="subtitle-shops">SANTA CLARA DEL MAR</h4>
              </div>
              <div className="maps">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1083.7098932841575!2d-57.5267924504965!3d-37.828266747835414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d3166a2d537d%3A0xf35b53055eb80f9d!2sSM%20Desarmaderos!5e0!3m2!1ses-419!2sar!4v1667486979890!5m2!1ses-419!2sar"
                  className="maps-image"
                />
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Los Alamos 183, Santa Clara Del Mar 7609, Buenos Aires,
                    Argentina.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">
                    <a href="tel:+5492233068025">+54 9 223 3068025</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="internal-footer">
          <p className="text-footer">
            {" "}
            ©MSDesarmaderos Promotors Theme All rights reserved Copyrights 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
