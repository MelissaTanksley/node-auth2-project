const db = require("./knexconfig");

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db("users").select("id", "username").orderBy("id");
}

function findBy(filter) {
return db("users").where(filter).orderBy("id");
    // return db("users as u")
    //     .where(filter)
    //     .orderBy("u.id")
    //     .join("departments as d", "d.id", "u.role")
    //     .select("u.id", "u.username", "u.password", "d.name as department");
}

function add(user) {
db("users").insert(user)
.then(id => {
    return findById(id[0])
})
.catch(err => {return err})
}

function findById(id) {
    return db("users").where({ id }).first();
}