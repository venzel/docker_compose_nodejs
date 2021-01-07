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
