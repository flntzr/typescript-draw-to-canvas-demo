export interface Rectangle extends Point {
  name: 'rectangle';
  width: number;
  height: number;
}

export interface Triangle {
  name: 'triangle';
  point1: Point;
  point2: Point;
  point3: Point;
}

export interface Circle extends Point {
  name: 'circle';
  radius: number;
}

export interface Point {
  x: number;
  y: number;
}

export type Shape = Rectangle | Triangle | Circle;
