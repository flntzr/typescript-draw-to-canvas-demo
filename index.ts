import './style.css';
import { Circle, Rectangle, Shape, Triangle } from './shape';

const drawRectangleToContext = function (
  context: CanvasRenderingContext2D,
  rectangle: Rectangle
): void {
  context.fillStyle = 'rgba(200, 0, 0, 0.3)';
  context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
};

const drawTriangleToContext = function (
  context: CanvasRenderingContext2D,
  triangle: Triangle
): void {
  context.fillStyle = 'rgba(0, 200, 0, 0.3)';
  context.beginPath();
  context.moveTo(triangle.point1.x, triangle.point1.y);
  context.lineTo(triangle.point2.x, triangle.point2.y);
  context.lineTo(triangle.point3.x, triangle.point3.y);
  context.fill();
};

const drawCircleToContext = function (
  context: CanvasRenderingContext2D,
  circle: Circle
): void {
  context.fillStyle = 'rgba(0, 0, 200, 0.3)';
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.fill();
};

const drawShape = function (shape: Shape): void {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas.getContext) {
    throw new Error('The element is not a canvas.');
  }
  const context = canvas.getContext('2d');
  switch (shape.name) {
    case 'rectangle':
      drawRectangleToContext(context, shape);
      break;
    case 'triangle':
      drawTriangleToContext(context, shape);
      break;
    case 'circle':
      drawCircleToContext(context, shape);
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
    point1: { x: 20, y: 40 },
    point2: { x: 180, y: 40 },
    point3: { x: 100, y: 80 },
  })
);

document
  .getElementById('draw-circle')
  .addEventListener('click', () =>
    drawShape({ name: 'circle', x: 150, y: 100, radius: 50 })
  );
