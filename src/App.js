import './App.css';
import logo from './images/logo.png';
import ford from './images/ford.png';
import chevrolet from './images/chevrolet.png';
import peugeot from './images/peugeot.png';
import renault from './images/renault.png';
import audi from './images/audi.png';
import volkswagen from './images/volkswagen.png'

function App() {
  return (
    <div id="App">
      <div className='section-container first-section'>

        <div className='header'>
          <img className='image' src={logo} />
        </div>
        <div className='home-container'>
          <div>
            <div className='father-text-div'>
              <h1 className='font'>MSDesarmaderos</h1>
            </div>

            <div className='slogan-div'>
              <h2 className='slogan-font'>Es una empresa con grandes objetivos, la cual ha nacido de la fusión de un grupo de personas con mucha experiencia en el rubro, haciendo de la profesionalidad y un continuo afán de superación, los pilares fundamentales para llevar a cabo el cumplimiento de nuestros objetivos.</h2>
            </div>
          </div>
          <div>
            <div className='column-div'></div>
          </div>
        </div>

        <div className='companies'>
          <div className='son-companies' >
            <h1 className='tittle-sponsors'>NUESTRAS MARCAS</h1>

          </div>
          <div className='images-companies'>
            <img className='sponsors' src={ford} />
            <img className='sponsors' src={chevrolet} />
            <img className='sponsors' src={peugeot} />
            <img className='sponsors' src={renault} />
            <img className='sponsors' src={audi} />
            <img className='sponsors' src={volkswagen} />

          </div>
        </div>


      </div>

      <div className='section-container second-section'>
        { <div className='section-identity'>
          <div className='tittle-identity'>Why chose us?</div>

          <div className='presentation'>
            <div>presentation1</div>
            <div>presentation2</div>
            <div>presentation3</div>
           </div>


        </div> }
      </div>

      <div className='section-container third-section'>

      </div>

      <div className='section-container fourth-section'>

      </div>
    </div>
  );
}

export default App;
