# README.md

## Documentacao

- https://hashinteractive.com/blog/docker-compose-up-with-postgres-quick-tips/
- https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3

### Executa

```bash
# Permissao de usuario para rodar o docker compose
$ sudo chown $USER /var/run/docker.sock

# Gera o arquivo postgres.conf com varias configuracoes
$ docker run -i --rm postgres cat /usr/share/postgresql/postgresql.conf.sample > postgres.conf
```

### Conectar em um container e depois no docker

```bash
# Conectar no container
$ docker exec -it <container-name> bash

# Etrar no mongo
$ mongo -u <user_name> -p <password> --authenticationDatabase <database_name>
### OU ###
$ mongo -u <user_name> --authenticationDatabase <database_name>
```

### Conectar no mongodb por um client

```
mongodb://<user_name>:<password>@<host>:<port>/<database_name>
```
