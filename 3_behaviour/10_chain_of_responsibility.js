class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }

  sub(value) {
    this.sum -= value;
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).sub(1).sum);