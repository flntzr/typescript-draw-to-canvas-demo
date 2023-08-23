import { Circle, Rectangle, Triangle } from './shape';

class ListStorage<V> {
  public constructor(private key: string) {}

  public get(): ReadonlyArray<V> {
    const stringValue = sessionStorage.getItem(this.key);
    return (JSON.parse(stringValue) || []) as V[];
  }

  public save(value: V): void {
    const oldValueList = this.get();
    sessionStorage.setItem(this.key, JSON.stringify([...oldValueList, value]));
  }

  public count(): number {
    return this.get().length;
  }
}

export const triangleStorage = new ListStorage<Triangle>('triangle');
export const rectangleStorage = new ListStorage<Rectangle>('rectangle');
export const circleStorage = new ListStorage<Circle>('circle');
