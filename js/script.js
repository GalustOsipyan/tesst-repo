/*
function* strGenerator() {
  yield 'Y';
  yield 'e';
  yield 's';
}

const str = strGenerator();
*/


/*
function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}


const num = numberGen(7);
console.log(num.next());

for (let n of num.next()) {
  if (!n.done) {
    console.log(n.value);
  }
}*/


/*const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0;

    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        }
        return { value: undefined, done: true };
      }
    };

  }
};*/


function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let key of iter(6)) {
  console.log(key);
}
