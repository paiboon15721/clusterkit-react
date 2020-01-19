const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const myFetchs = ["1", "2", "3"];

const app = async () => {
  const myPromises = myFetchs.map(v => () => axios.get(`${baseUrl}/${v}`));
  // const [res1, res2, res3] = await Promise.all(myPromises);
  for (let i = 0; i < myPromises.length; i++) {
    const res = await myPromises[i]();
    console.log(res.data);
  }
  // console.log(res1.data);
  // console.log(res2.data);
  // console.log(res3.data);
  // const result = await Pr
};

app();

// const app = async () => {
//   const apis = ["1", "2", "3"].map(v => () => axios.get(`${baseUrl}/${v}`));
//   // const res = await apis.reduce((p, fn) => p.then(fn), Promise.resolve());
//   // console.log(res.data)
//   for (let i = 0; i < apis.length; i++) {
//     const { data } = await apis[i]();
//     console.log(data);
//   }
// };

// app();
