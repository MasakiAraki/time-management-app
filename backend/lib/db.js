require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: '5432',
    dialect: 'postgres'
  }
)

module.exports = sequelize
