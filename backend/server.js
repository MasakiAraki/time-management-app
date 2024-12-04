const express = require('express')
const { Pool } = require('pg')

const app = express()
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'mydb',
  password: 'example',
  port: 5432
})

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json({ message: 'Hello from the backend!', time: result.rows[0] })
  } catch (err) {
    res.status(500).send(err.toString())
  }
})

app.listen(5000, () => {
  console.log('Backend is running on port 5000')
})
