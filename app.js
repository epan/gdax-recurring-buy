const Gdax = require('gdax');
const bformat = require('bunyan-format');
const bunyan = require('bunyan');

const formatOut = bformat({ outputMode: 'long' });
const logger = bunyan.createLogger({
  name: 'app',
  stream: formatOut,
  level: 'debug',
});

const config = require('./config');

const { sandbox, production, sandboxMode, numberOfDays } = config;
const DAY = 1000 * 60 * 60 * 24;
const env = sandboxMode ? sandbox : production;

const authedClient = new Gdax.AuthenticatedClient(
  env.apiKey,
  env.secret,
  env.passPhrase,
  env.apiURI,
);


const buyParams = {
  type: 'market',
  side: 'buy',
  product_id: 'BTC-USD', // ETH-USD and LTC-USD are other options
  size: 0.01, // 0.01 means 0.01 BTC which is the minimum and the minimum increment is 0.1
};

const startRecurringOrder = () => {
  authedClient
    .placeOrder(buyParams)
    .then((data) => {
      logger.info(data);
    })
    .catch((error) => {
      logger.error(error);
    });

  setTimeout(() => {
    startRecurringOrder();
  }, numberOfDays * DAY);
};

startRecurringOrder();
