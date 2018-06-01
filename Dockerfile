FROM node:alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./

FROM base AS dependencies
RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install --only=production && \
    cp -R node_modules prod_node_modules && \
    npm install

FROM dependencies AS transpiled
COPY babel-configs/.babelrc.latest ./.babelrc
COPY .babelrc ./.babelrc.original
COPY src/ ./src
RUN npm run build



FROM node:alpine
COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY --from=transpiled /app/lib ./lib
COPY --from=base /app/ ./
ENV NODE_ENV production
EXPOSE 3000
CMD node ./lib/index.js
