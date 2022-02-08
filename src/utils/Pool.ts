export default class Pool<T> {
    private pool: Array<T>;
    private MyConstructor: { new(): T; };

    constructor(MyConstructor: { new(): T }, nums: number = 10) {
      this.pool = []
      this.MyConstructor = MyConstructor
      for (let i = 0; i < nums; i++) {
        this.pool.push(new MyConstructor())
      }
    }

    pop(): T {
      if (this.pool.length > 0) {
        return this.pool.pop() as T
      } else {
        return new this.MyConstructor()
      }
    }

    push(obj: T) {
      this.pool.push(obj)
    }

    clear(): void {
      this.pool = []
    }
}
