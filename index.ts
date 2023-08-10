import './style.css';
import { Shape } from './shape';

const drawShape = function (shape: Shape): void {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas.getContext) {
    throw new Error('The element is not a canvas.');
  }
  const ctx = canvas.getContext('2d');
  switch (shape.name) {
    case 'rectangle':
      ctx.fillStyle = 'rgba(200, 0, 0, 0.3)';
      ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
      break;
    case 'triangle':
      ctx.fillStyle = 'rgba(0, 200, 0, 0.3)';
      ctx.beginPath();
      ctx.moveTo(shape.point1.x, shape.point1.y);
      ctx.lineTo(shape.point2.x, shape.point2.y);
      ctx.lineTo(shape.point3.x, shape.point3.y);
      ctx.fill();
      break;
    case 'circle':
      ctx.fillStyle = 'rgba(0, 0, 200, 0.3)';
      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
      ctx.fill();
      break;
  }
};

document
  .getElementById('draw-rectangle')
  .addEventListener('click', () =>
    drawShape({ name: 'rectangle', x: 50, y: 140, width: 150, height: 80 })
  );

document.getElementById('draw-triangle').addEventListener('click', () =>
  drawShape({
    name: 'triangle',
    point1: { x: 20, y: 20 },
    point2: { x: 80, y: 20 },
    point3: { x: 50, y: 35 },
  })
);

document
  .getElementById('draw-circle')
  .addEventListener('click', () =>
    drawShape({ name: 'circle', x: 150, y: 80, radius: 50 })
  );
