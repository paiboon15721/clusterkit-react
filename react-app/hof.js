const add = function(firstVal) {
  return function(v) {
    return firstVal + v;
  };
};

// const add2 = x => v => x + v;

const addFive = add(5);

console.log(addFive(3));
console.log(addFive(4));

// const add2 = function(fv, sv) {
//   return fv + sv;
// };
