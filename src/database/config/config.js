require('dotenv').config()

module.exports ={
  "development": {
    "username": "root",
    "password": '8127',
    "database": "electrodoggy_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
