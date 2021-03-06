const jwt = require("jsonwebtoken");

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  return console.log("Missing arguments");
}

function singToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option === "sign") {
  console.log(singToken({ sub: nameOrToken }, secret));
} else if (option === "verify") {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log("Options needs to be 'sign' or 'verify'");
}
