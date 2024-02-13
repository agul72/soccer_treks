import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import img1 from './img/soccer-field-1.jpg';
import img2 from './img/soccer-field-2.jpg';
import img3 from './img/soccer-field-3.jpg';
import img4 from './img/soccer-field-4.jpg';
import img5 from './img/soccer-field-5.jpg';
import img6 from './img/soccer-field-6.jpg';

import './css/main.css'

function Home(): JSX.Element {

  const images = [img1, img2, img3, img4, img5, img6];
  let intervalId: ReturnType<typeof setInterval>;

  const [img, setImg] = useState(images[0])

  useEffect(() => {
    let i = 0;
    
    intervalId = setInterval(() => {
      i = (i + 1) % 6;
      setImg(images[i]);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

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
        <div id="layer-1" className="layers__item"
          style={{ backgroundImage: `url(${img})`, }}></div>
        <div id="layer-2" className="layers__item"></div>
        <div id="layer-3" className="layers__item">
          <div id="hero-content">
            <h1>Soccer treks</h1>
            <div id="hero-content__p">
              The best place for something...
            </div>
            <Link to="/mls" className="button start">MLS</Link>
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