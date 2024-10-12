
import '../components/css/Astronaut404.css';

import React, { useEffect, useRef } from 'react';


const NotFound = () => {
  const cordCanvasRef = useRef(null);
  const visorCanvasRef = useRef(null);
  useEffect(() => {
    drawVisor();
    animateCord();
  }, []);

  const drawVisor = () => {
    const canvas = visorCanvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(5, 45);
    ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
    ctx.lineTo(55, 20);
    ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
    ctx.lineTo(15, 10);
    ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
    ctx.lineTo(5, 45);
    ctx.fillStyle = '#2f3640';
    ctx.strokeStyle = '#f5f6fa';
    ctx.fill();
    ctx.stroke();
  };

  const animateCord = () => {
    const ctx = cordCanvasRef.current.getContext('2d');
    let y1 = 160, y2 = 100, y3 = 100;
    let y1Forward = true, y2Forward = false, y3Forward = true;

    const animationLoop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.beginPath();
      ctx.moveTo(130, 170);
      ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Update y-values for animation
      y1 += y1Forward ? 1 : -1;
      y2 += y2Forward ? 1 : -1;
      y3 += y3Forward ? 1 : -1;

      if (y1 <= 100 || y1 >= 300) y1Forward = !y1Forward;
      if (y2 <= 100 || y2 >= 310) y2Forward = !y2Forward;
      if (y3 <= 100 || y3 >= 317) y3Forward = !y3Forward;

      requestAnimationFrame(animationLoop);
    };

    animationLoop();
  };

  return (
    <div className="container">
      <div className="moon">
        <div className="moon__crater moon__crater1"></div>
        <div className="moon__crater moon__crater2"></div>
        <div className="moon__crater moon__crater3"></div>
      </div>

      <canvas ref={visorCanvasRef} width="60" height="60" style={{ display: 'none' }} />
      <canvas ref={cordCanvasRef} width={window.innerWidth} height={window.innerHeight} />

      <div className="error">
        <div className="error__title">404</div>
        <div className="error__subtitle">Oops! Page not found</div>
        <div className="error__description">It seems we can't find what you're looking for.</div>
        <button className="error__button">Go Back</button>
      </div>

      <div className="star star1"></div>
      <div className="star star2"></div>
      <div className="star star3"></div>
      <div className="star star4"></div>
      <div className="star star5"></div>
    </div>
  );
};

export default NotFound;
