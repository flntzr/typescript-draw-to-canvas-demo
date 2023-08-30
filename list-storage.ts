import { Circle, Rectangle, Triangle } from './shape';

class ListStorage<T> {
  public constructor(private key: string) {}

  public get(): T[] {
    const stringValue = sessionStorage.getItem(this.key);
    return stringValue ? (JSON.parse(stringValue) as T[]) : [];
  }

  public save(value: T): void {
    const oldValues = this.get();
    sessionStorage.setItem(this.key, JSON.stringify([...oldValues, value]));
  }

  public count(): number {
    return this.get().length;
  }
}

export const triangleStorage = new ListStorage<Triangle>('triangle');
export const rectangleStorage = new ListStorage<Rectangle>('rectangle');
export const circleStorage = new ListStorage<Circle>('circle');
