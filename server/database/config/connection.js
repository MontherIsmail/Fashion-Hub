require('env2')('.env');
const { Pool } = require('pg');

let dbUrl = '';
let sslConnection;
if (process.env.NODE_EVN === 'test') {
  dbUrl = process.env.DB_URL_TEST;
  sslConnection = false;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL;
  sslConnection = { rejectUnauthorized: false };
} else {
  dbUrl = process.env.DB_URL;
  sslConnection = false;
}
const connection = new Pool({
  connectionString: dbUrl,
  ssl: sslConnection,
});

module.exports = connection;
