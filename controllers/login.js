const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginPage = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide a username and password" });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboardPage = (req, res) => {
  const authHeader = req.headers.authorization;

  // Authorization: Bearer <token>

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username } = decoded;
    res.status(200).json({ msg: username });
  } catch (err) {
    return res.status(401).json({ msg: "Authentication Failed" });
  }
};

module.exports = { loginPage, dashboardPage };
