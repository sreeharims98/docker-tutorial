1. create Dockerfile

```bash
FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","start"]
```

2. add .dockerignore

```bash
node_modules
```

3. Build image

```bash
docker build -t myapp
```

4. Run container

```bash
docker run --name myapp_c1 -p 4000:4000 -d myapp
```

5. Show all running containers

```bash
docker ps
```

6. Show all containers

```bash
docker ps -a
```

7. Stop a running container

```bash
docker stop myapp_c1
```

8. Restart a container

```bash
docker start myapp_c1
```
