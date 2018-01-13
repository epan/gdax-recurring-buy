require('dotenv').config();
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

const { numberOfDays } = config;
const DAY = 1000 * 60 * 60 * 24;

const authedClient = new Gdax.AuthenticatedClient(
  process.env.API_KEY,
  process.env.SECRET,
  process.env.PASSPHRASE,
  process.env.API_URI,
);

const buyParams = {
  type: 'market',
  side: 'buy',
  product_id: 'BTC-USD', // ETH-USD and LTC-USD are other options
  size: 0.01, // 0.01 means 0.01 BTC which is both the minimum buy and increment
};

const startRecurringOrder = () => {
  authedClient.placeOrder(buyParams)
    .then((data) => {
      logger.info(data);
    })
    .catch((error) => {
      logger.error(error);
    });

  authedClient.getFills()
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
