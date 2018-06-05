import Koa from 'koa';
import Router from 'koa-router';

import { version } from '../package.json';
import { template } from './template';
import { counter } from './counter';

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 3000;

router.get('/', async (ctx) => {
  await counter.inc();
  const counterValue = await counter.get();

  ctx.body = template({
    counterValue,
    version,
    nodeVersion: process.version,
    proccessId: process.pid,
  });
});

app.use(router.routes());

(async () => {
  await counter.connect();
  app.listen(PORT, () => console.log('Server started on port', PORT));
})();
