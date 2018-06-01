import Koa from 'koa';
import Router from 'koa-router';

import { version } from '../package.json';
import { template } from './template';

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 3000;

let counter = 0;

router.get('/', (ctx) => {
  counter++;
  ctx.body = template({ counter, version });
  setTimeout(() => {
    counter--;
  }, 60 * 1000);
});

app.use(router.routes());

app.listen(PORT, () => console.log('Server started on port', PORT));
