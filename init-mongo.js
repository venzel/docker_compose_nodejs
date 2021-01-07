db.createUser({
  user: 'behappy',
  pwd: 'queijo',
  roles: [
    {
      role: 'readWrite',
      db: 'behappy',
    },
  ],
})
