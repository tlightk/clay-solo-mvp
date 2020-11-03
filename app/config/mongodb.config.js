require("dotenv").config();
const db = process.env.MONO_DB_URI;

module.exports = {
    url: db
}