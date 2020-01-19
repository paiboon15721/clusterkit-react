const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const app = async () => {
  const apis = ["1", "2", "3"].map(v => () => axios.get(`${baseUrl}/${v}`));
  // const res = await apis.reduce((p, fn) => p.then(fn), Promise.resolve());
  // console.log(res.data)
  for (let i = 0; i < apis.length; i++) {
    const { data } = await apis[i]();
    console.log(data)
  }
};

app();
