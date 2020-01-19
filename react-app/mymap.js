const arr = ["cat", "dog", "pig"];

function myMap(func, arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    newArr.push(result);
  }
  return newArr;
}

const newArr = myMap(v => {
  return `my ${v}`;
}, arr);
console.log(newArr);
