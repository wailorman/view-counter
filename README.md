# Views counter

[![Build Status](https://travis-ci.org/wailorman/views-counter.svg?branch=master)](https://travis-ci.org/wailorman/views-counter)

This is an example application of building Node.js project for multiple node 
versions at once, dockerizing & deploying it on kubernetes cluster

[Live demo](http://35.195.254.204/) (may not work)

## Getting started

Install dependencies:

`npm install`

Start the server on [localhost:3000](http://localhost:3000/):

`npm start`

Build sources with babel for last Node.js version to `lib/` folder:

`npm run build`

Run ESLint:

`npm run lint`

## Docker

Manual build & run for specific Node.js version:

```
# -- Node.js v6 --
docker image build -t views-counter:6 -f dockerfiles/Dockerfile.6 . && \
docker run -it -p 3000:3000 --name views-counter views-counter:6

# -- Node.js v7 --
docker image build -t views-counter:7 -f dockerfiles/Dockerfile.7 . && \
docker run -it -p 3000:3000 --name views-counter views-counter:7

# -- Node.js v8 --
docker image build -t views-counter:8 -f dockerfiles/Dockerfile.8 . && \
docker run -it -p 3000:3000 --name views-counter views-counter:8

# -- Latest Node.js version --
docker image build -t views-counter:latest . && \
docker run -it -p 3000:3000 --name views-counter views-counter:latest
```

## docker-compose

```
## -- Run all Node.js versions --
docker-compose build && \
docker-compose up -d

## ---- OR -----

## -- Run only latest Node.js version --
docker-compose build views-counter-latest && \
docker-compose up -d views-counter-latest
```

Now you can access multiple version of app by visiting 
(assuming your docker-machine address is `192.168.99.100`):

* [Latest Node.js version](http://192.168.99.100:3000/) (port `3000`):
* [Node.js v6](http://192.168.99.100:3006/) (port `3006`):
* [Node.js v7](http://192.168.99.100:3007/) (port `3007`):
* [Node.js v8](http://192.168.99.100:3008/) (port `3008`):

## Kubernetes

1. Set up your cluster (i.e. on [Google Cloud](https://cloud.google.com/kubernetes-engine/docs/quickstart))
2. Open `.kube/deployment.yaml` file & update `image: ...` to your ones
3. Run `kubectl create -f ./.kube/`
4. Wait until service receive external ip by checking `kubectl get service views-counter`
5. Visit `http://[EXTERNAL_IP]`
