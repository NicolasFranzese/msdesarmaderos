import "./App.css";
import logo from "././images/logo.ico";
import ford from "./images/ford.png";
import chevrolet from "./images/chevrolet.png";
import peugeot from "./images/peugeot.png";
import renault from "./images/renault.png";
import audi from "./images/audi.png";
import volkswagen from "./images/volkswagen.png";
import medalla from "./images/medalla.png";
import team from "./images/team.png";
import finanzas from "./images/finanzas.png";
import ubicacion from "./images/ubicacion.png";
import telefono from "./images/telefono2.png";
import maps from "./images/maps.png";
import clean from "./images/clean.jpg"
import clean2 from "./images/clean2.jpg"
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
              <h1 className="font">MS Desarmaderos</h1>
            </div>

            <div className="slogan-div">
              <h2 className="slogan-font">
                Es una empresa con grandes objetivos, la cual ha nacido de la
                fusión de un grupo de personas con mucha experiencia en el
                rubro, haciendo de la profesionalidad y un continuo afán de
                superación, los pilares fundamentales para llevar a cabo el
                cumplimiento de nuestros objetivos.
              </h2>
            </div>
          </div>
          <div>
            <div className="column-div"></div>
          </div>
        </div>

        <div className="companies">
          <div className="son-companies">
            <h1 className="tittle-sponsors">NUESTRAS MARCAS</h1>
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

      <div className="section-container second-section">
        <div className="section-identity">
          <div className="tittle-identity">Why choose us?</div>

          <div className="presentation">
            <div className="presentation2">
              <div className="description">
                <img className="logo-medal" src={medalla}></img>
              </div>
              <div className="medal-tittle">Wide range of brands</div>
              <div className="medal-description">
                We can help with your financing plan, we can offer some tips and
                tricks. Drive off with this dream car of yours regardless of
                your credit history.
              </div>
            </div>
            <div className="presentation2">
              <div className="description">
                <img className="logo-medal" src={team}></img>
              </div>
              <div className="medal-tittle">Trusted by our clients</div>
              <div className="medal-description">
                We can help with your financing plan, we can offer some tips and
                tricks. Drive off with this dream car of yours regardless of
                your credit history.
              </div>
            </div>
            <div className="presentation2">
              <div className="description">
                <img className="logo-medal" src={finanzas}></img>
              </div>
              <div className="medal-tittle">Fast & easy financing</div>
              <div className="medal-description">
                We can help with your financing plan, we can offer some tips and
                tricks. Drive off with this dream car of yours regardless of
                your credit history.
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
                <h4 className="subtitle-shops">MAR DEL PLATA</h4>
              </div>
              <div className="maps">
                <img className="maps-image" src={maps}></img>
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Playa Grande, Mar del plata 7600. Buenos Aires, Argentina.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">+54 0223-4711716.</span>
                </div>
              </div>
            </div>
            <div className="individual-shops">
              <div className="city-shops">
                <h4 className="subtitle-shops">BARCELONA</h4>
              </div>
              <div className="maps">
                <img className="maps-image" src={maps}></img>
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Distrito de les Corts, Barcelona 08001. Cataluña, España.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">+34 93 4711716.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="shops">
            <div className="individual-shops">
              <div className="city-shops">
                <h4 className="subtitle-shops">NAPLES</h4>
              </div>
              <div className="maps">
                <img className="maps-image" src={maps}></img>
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Naples, Florida B1602. United States.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">+081 4711716.</span>
                </div>
              </div>
            </div>
            <div className="individual-shops">
              <div className="city-shops">
                <h4 className="subtitle-shops">ROMA</h4>
              </div>
              <div className="maps">
                <img className="maps-image" src={maps}></img>
              </div>
              <div className="data-maps">
                <div className="sub-maps">
                  <img className="location" src={ubicacion}></img>
                  <span className="text-location">
                    Trastevere, Roma 00042. Italy.
                  </span>
                </div>
                <div className="sub-maps">
                  <img className="location" src={telefono}></img>
                  <span className="text-location">+0039 4711716.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container fourth-section">

        <div className="structure">
          <div className="internal-structure">
            <img className="clean-img" src={clean}></img>
          </div>
          <div className="internal-structure">
            <div className="tittle-structure">
              <div className="content-structure">
                <div className="distribution-structure1">
                  <h2 className="tittle-content">CAR EXTERIOR CLEANING: BASIC DETAILING</h2>
                </div>
                <div className="distribution-structure2">
                  <div className="subtittle-content">
                    <h1 className="subtittle-text">SAME DAY SERVICE</h1>
                  </div>
                  <div className="subtittle-content"><h1 className="subtittle-text">ONLINE APPOINTMENT</h1></div>
                  <div className="subtittle-content"><h1 className="subtittle-text">CONVENIENT LOCATION</h1></div>
                  <div className="subtittle-content"><h1 className="subtittle-text">COMPLIMENTARY SHUTTLE</h1></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="structure">
          <div className="internal-structure">
            <div className="tittle-structure">
              <div className="content-structure">
                <div className="distribution-structure1"><h2 className="tittle-content2">RUBBING, WAXING, AND POLISHING</h2></div>
                <div className="distribution-structure3">
                  <p className="last-description">Our technicians have undergone the most extensive and stringent car detail training program. And the only car that matters is yours because we will detail it to your complete satisfaction.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="internal-structure"> <img className="clean-img" src={clean2}></img></div>
        </div>















      </div>
    </div>
  );
}

export default App;
