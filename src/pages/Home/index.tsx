import { Link } from 'react-router-dom';
import './css/main.css'
import { useEffect } from 'react';

function Home(): JSX.Element {

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      Object.assign(document.documentElement, {
        style: `
--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
--move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg`
      });
    });
  }, []);
  
  return (
    <section id="layers" >
      <div id="layers__container">
        <div id="layer-1" className="layers__item"></div>
        <div id="layer-2" className="layers__item"></div>
        <div id="layer-3" className="layers__item">
          <div id="hero-content">
            <h1>Soccer trecks</h1>
            <div id="hero-content__p">
              The best place for something...
            </div>
            <Link to="/mls" className="button start">Get started</Link>
          </div>
        </div>
        <div id="layer-4" className="layers__item">
          <canvas id="rain"></canvas>
        </div>
        <div id="layer-5" className="layers__item" ></div>
        <div id="layer-6" className="layers__item" ></div>
      </div>
    </section>
  )
}

export default Home;