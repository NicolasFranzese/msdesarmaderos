import './App.css';
import logo from './images/logo.png'
// import ford from './images/ford.png'

function App() {
  return (
    <div id="App">
      <div className='section-container first-section'>
        
        <div className='header'>
          <img className= 'image' src={logo}/>
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

       <div style={{ color: "white"}}>
        <div>
          Nuestras marcas
        </div>
        <div>
        { /* <img className= 'ford' src={ford}/> */}
        { /* <img className= 'ford' src={ford}/> */}
        { /* <img className= 'ford' src={ford}/> */}
        { /* <img className= 'ford' src={ford}/> */}
        { /* <img className= 'ford' src={ford}/> */}
        </div>
       </div>

        
      </div>

      <div className='section-container second-section'>
        Quienes Somos
      </div>

      <div className='section-container third-section'>

      </div>

      <div className='section-container fourth-section'>

      </div>
    </div>
  );
}

export default App;
