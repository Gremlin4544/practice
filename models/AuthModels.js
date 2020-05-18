const db = require("../data/dbConfig.js");
module.exports = {
  get,
  getBy,
  add,
  update,
  remove,
};

function get() {
  return db("users");
}

function getBy(username) {
  return db("users").select("id", "username", "password").where(username);
}

function add(post) {
  return db("users")
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where("id", id).del();
}
