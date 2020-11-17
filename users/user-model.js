const db = require("../data/config");

async function addUser({ username, password, role }) {
  const [newUserId] = await db("users").insert({
    username,
    password,
    role,
  });

  return newUserId;
}

async function getUserByUsername(username) {
  return db("users").where("username", username).first();
}

module.exports = {
  addUser,
  getUserByUsername,
};
