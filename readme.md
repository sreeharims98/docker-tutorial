1. create Dockerfile

```bash
FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"]
```

2. add .dockerignore

```bash
node_modules
```

3. Build image

```bash
docker build -t myapp .
```

4. Create and run new container

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

9. Delete image that are not used

```bash
docker image rm myapp
```

10. Delete image that are used

```bash
docker image rm myapp -f
```

11. Delete container

```bash
docker container rm myapp_c1
```

12. Delete all images, containers & volumes

```bash
docker system prune -a
```

13. Build an image with tag name (version)

```bash
docker build -t myapp:v1 .
```

14. Create a docker-compose.yaml file and add frontend and backend

```bash
services:
  api:
    build: ./api
    container_name: api_c
    ports:
      - "4000:4000"
  myblog:
    build: ./myblog
    container_name: myblog_c
    ports:
      - "5173:5173"
```

15. up a docker compose

```bash
docker compose up
```

16. down a docker compose

```bash
docker compose down
```

17. In vite frontend for compose to work: Need to add this in vite.config.js file
    ```javascript
    export default defineConfig({
      plugins: [react()],
      server: {
        host: true,
      },
    });
    ```
