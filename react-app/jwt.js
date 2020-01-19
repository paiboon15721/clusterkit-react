const jwt = require("jsonwebtoken");

const secret = "cxlvkjjweflkjs;sfjfojisdl;fkje";

jwt.sign({ email: "test@gmail.com", role: "admin" }, secret, (err, token) => {
  console.log(token);

  jwt.verify(token, secret, (err, decoded) => {
    console.log(decoded);
  });
});
