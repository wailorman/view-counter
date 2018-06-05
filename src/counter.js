import redis from 'redis';
import { promisifyAll } from 'bluebird';

promisifyAll(redis);

let client;

const { REDIS_URI } = process.env;

export const counter = {
  connect: () =>
    new Promise((resolve) => {
      client = redis.createClient(REDIS_URI);

      client.on('ready', () => {
        console.log('Connected to redis');
        resolve();
      });

      client.on('error', (err) => {
        console.error('Unhandled redis error:', err);
      });
    }),
  get: async () => client.dbsizeAsync(),
  inc: async () => {
    const uniqKey = `${new Date().getTime()}_${Math.floor(Math.random() * 1000000)}`;
    const ONE_MINUTE = 60;
    return client.setAsync(uniqKey, '1', 'EX', ONE_MINUTE);
  },
};

export default counter;
