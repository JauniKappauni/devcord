const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.error("❌DB Conn");
  } else {
    console.log("✅DB Conn");
    conn.release;
  }
});

module.exports = pool;
