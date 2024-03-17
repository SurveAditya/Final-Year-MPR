const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let token =
    (req.header("Authorization") || "").replace("Bearer ", "") ||
    (req.cookies && req.cookies.token) ||
    (req.body && req.body.token);

  if (!token) return res.status(403).send("Token is required");

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
  } catch (error) {
    console.log(error);
    return res.status(401).send("Invalid Token");
  }

  next();
};

module.exports = auth;
