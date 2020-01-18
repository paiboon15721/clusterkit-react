const arr = ["cat", "dog", "pig"];
const userList = [
  { name: "paiboon", lname: "aung" },
  { name: "name", lname: "lname" }
];

const newUserList = userList.map(v => `${v.name} ${v.lname}`);

console.log(newUserList);

const newArr = arr.map(function(v) {
  return `my ${v}`;
});

console.log(newArr);
