require('dotenv').config()

db.createUser({
  user: process.env.DB_MONGO_USER,
  pwd: process.env.DB_MONGO_PASSWORD,
  roles: [
    {
      role: 'readWrite',
      db: process.env.DB_MONGO_NAME,
    },
  ],
})
