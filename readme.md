1. create Dockerfile

2. add .dockerignore

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

7. Restart a container

```bash
docker start myapp_c1
```
