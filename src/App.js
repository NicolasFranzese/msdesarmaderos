
import "./App.css";
import Iframe from 'react-iframe';
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
import clean from "./images/clean.jpg"
import clean2 from "./images/clean2.jpg"
import desarmadero from "./images/desarmadero.jpg"

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
            <div className="image-container">
              <img className="image-parameters" src={desarmadero}></img>
            </div>
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
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12577.278143685986!2d-57.58725335176667!3d-37.99300665104608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d92f185d0925%3A0x5020da28f3ebef8e!2sAutopartes%20Raul!5e0!3m2!1ses-419!2sar!4v1666150312503!5m2!1ses-419!2sar"
                  className="maps-image" />
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
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.298579836346!2d-57.58071666590024!3d-37.993495532061104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9fde2e5ba29%3A0x65924f82b394e35b!2sIndustrias%20DVD%20GNC%20Express!5e0!3m2!1ses-419!2sar!4v1666233815964!5m2!1ses-419!2sar"
                  className="maps-image" />
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
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290.866126745319!2d-57.55386740068057!3d-37.96702166826921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dba6beb7aa81%3A0x7c405420b007c801!2sCheverry%20Constituci%C3%B3n!5e0!3m2!1ses-419!2sar!4v1666234226164!5m2!1ses-419!2sar"
                  className="maps-image" />
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
                <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12577.813194054148!2d-57.56034100000001!3d-37.989886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48a182ef1630ca2c!2sUOCRA%20-%20Construir%20Salud%20-%20Cemap%20Mar%20del%20Plata!5e0!3m2!1ses-419!2sar!4v1666234165266!5m2!1ses-419!2sar"
                  className="maps-image" />
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
