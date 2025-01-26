require('dotenv').config()

module.exports = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres'
}
