# synrgy-fsw-latihan
Latihan and Submission Synrgy Academy Fullstack Web Javascript
```
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=romijulianto -d -p 5432:5432 postgres
docker run --rm --name mongo-docker -d -p 27017:27017 mongo
docker run --rm --name redis-docker -d -p 6379:6379 redis

--- execute 
docker exec -it pg-docker bash
psql -W -U postgres

docker exec -it mongo-docker bash
mongosh

docker exec -it redis-docker bash
redis-cli

--- start/top
docker stop mono-docker
docker stop pg-docker
docker stop redis-docker
```