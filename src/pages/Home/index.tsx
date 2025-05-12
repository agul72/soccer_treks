import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import img1 from './img/soccer-field-1.jpg';
import img2 from './img/soccer-field-2.jpg';
import img3 from './img/soccer-field-3.jpg';
import img4 from './img/soccer-field-4.jpg';
import img5 from './img/soccer-field-5.jpg';
import img6 from './img/soccer-field-7.jpeg';
import img7 from './img/soccer-field-91.jpg';
// import img6 from './img/soccer-field-6.jpg';

import './css/main.scss'

function Home(): JSX.Element {

  const images = [img1, img2, img3, img4, img5, img6, img7];
  let intervalId: ReturnType<typeof setInterval>;

  const [img, setImg] = useState(images[0])

  useEffect(() => {
    let i = 1;

    intervalId = setInterval(() => {
      i = (i + 1) % images.length;
      setImg(images[i]);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function onMouseMoveHandler(e: MouseEvent) {

    Object.assign(document.documentElement, {
      style: `
--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
--move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg`
    });
  }

  function updateDeviceOrientation(event: DeviceOrientationEvent) {
    // if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
      Object.assign(document.documentElement.style, {
        '--move-x': `${((event.gamma ?? 0) - window.innerWidth / 2) * -0.005}deg`, // Adjust multiplier as needed
        '--move-y': `${((event.beta ?? 0) - window.innerHeight / 2) * -0.01}deg`, // Adjust multiplier as needed
      });
    // }
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMoveHandler);
    window.addEventListener('deviceorientation', updateDeviceOrientation);

    return () => {
      document.removeEventListener('mousemove', onMouseMoveHandler);
      window.removeEventListener('deviceorientation', updateDeviceOrientation);
    }
  }, []);

  return (
    <section id="layers" >
      <div id="layers__container">
        <div id="layer-1" className="layers__item"
          style={{ backgroundImage: `url(${img})`, }}>d</div>
        {/* <div id="layer-2" className="layers__item"></div> */}
        <div id="layer-3" className="layers__item">
          <div id="hero-content">
            <div>Fan Embassy</div>
            <div id="hero-content__p">
              Your go-to for soccer stadiums in the US and beyond
            </div>
            <Link to="/mls" className="button start">MLS</Link>
          </div>
        </div>
        <div id="layer-5" className="layers__item" ></div>
      </div>
    </section>
  )
}

export default Home;