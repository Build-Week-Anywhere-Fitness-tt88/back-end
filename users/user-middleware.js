//   AUTHORIZATION MIDDLEWARE

const jwt = require("jsonwebtoken");
// const SECRET = "fsadfdsafih4i2y3874twufskjdfkjdsayro873yqriuhsalkjfhdsaifyia";



// Allow both students and instructors
function authMiddleware() {
  return async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    try {
      const decodedUserFromToken = jwt.verify(token, process.env.TOKEN_SECRET);

      req.token = decodedUserFromToken;
      next();
    } catch (err) {
      return res.status(401).json({
        message: "Invalid authorization token"
      });
    }npm 
  };
}

// Only instructors are allowed
function instructorOnlyAuthMiddleware() {
  return async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    try {
      const decodedUserFromToken = jwt.verify(token, process.env.TOKEN_SECRET);

      if (decodedUserFromToken.role === "instructor") {
        req.token = decodedUserFromToken;
        next();
      } else {
        return res.status(403).json({
          message: "Only instructors allowed"
        });
      }
    } catch (err) {
      return res.status(401).json({
        message: "Invalid authorization token"
      });
    }
  };
}

// Only students are allowed
function studentOnlyAuthMiddleware() {
  return async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    try {
      const decodedUserFromToken = jwt.verify(token, process.env.TOKEN_SECRET);

      if (decodedUserFromToken.role === "student") {
        req.token = decodedUserFromToken;
        next();
      } else {
        return res.status(403).json({
          message: "Only students allowed"
        });
      }
    } catch (err) {
      return res.status(401).json({
        message: "Invalid authorization token"
      });
    }
  };
}

module.exports = {
  authMiddleware,
  instructorOnlyAuthMiddleware,
  studentOnlyAuthMiddleware
};
