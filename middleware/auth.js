const jwt = require("jsonwebtoken");
const config = require("config");

//we will implement this middlware function at any protected route that need authorization for the user
module.exports = function(req, res, next) {
  //Get the token from the header of the protected route
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    //401 = not authorized
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtToken"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
