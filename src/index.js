function memoize(fn) {
  const cache = {};
  const context = this;
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn.call(context || this, ...args);
    }
    return cache[argsCache];
  };
}

function product(num1, num2) {
  for (let i = 0; i < 100000; i++) {
    return num1 * num2;
  }
}

const memoizedProduct = memoize(product);

console.time("First pass");
console.log(memoizedProduct(999, 987));
console.timeEnd("First pass");

console.time("Second pass");
console.log(memoizedProduct(999, 987));
console.timeEnd("Second pass");
