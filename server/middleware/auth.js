const jwt = require('jsonwebtoken');
const SECRET = 'SECr3t';  // This should be in an environment variable in a real application

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      msz:"you are maybe unauthorized. checking CI/CD pipe"
    });
  }
};

module.exports = {
    authenticateJwt,
    SECRET
}
