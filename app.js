const Gdax = require('gdax');
const bunyan = require('bunyan');
const bformat = require('bunyan-format');

const formatOut = bformat({ outputMode: 'long' });
const logger = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' });

const config = require('./config');

const publicClient = new Gdax.PublicClient();

const main = () => {
  publicClient
    .getProducts()
    .then((data) => { logger.info(data); })
    .catch((error) => { logger.error(error); });
};

main();

logger.info(config.email);
