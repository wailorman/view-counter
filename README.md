# views-counter

```
docker image build -t wailorman/views-counter:6 -f dockerfiles/Dockerfile.6 . && \
docker image build -t wailorman/views-counter:7 -f dockerfiles/Dockerfile.7 . && \
docker image build -t wailorman/views-counter:8 -f dockerfiles/Dockerfile.8 . && \
docker image build -t wailorman/views-counter:latest .

docker run -it -p 3000:3000 --name wailorman/views-counter views-counter:6
docker run -it -p 3000:3000 --name wailorman/views-counter views-counter:7
docker run -it -p 3000:3000 --name wailorman/views-counter views-counter:8
docker run -it -p 3000:3000 --name wailorman/views-counter views-counter:latest
```
