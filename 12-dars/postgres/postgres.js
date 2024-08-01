const pg = require("pg");

const { Pool } = pg;

const pool = new Pool({
  database: "n13",
  host: "localhost",
  password: "Namangan05",
  user: "postgres",
  port: 3030,
});

const fetchData = async (query, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(query, params?.length ? params : []);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

module.exports = fetchData;
