require('dotenv').config();
const Gdax = require('gdax');
const bformat = require('bunyan-format');
const bunyan = require('bunyan');

// Gets user-input settings from config.json
const config = require('./config');

// Formats logging to console
const formatOut = bformat({ outputMode: 'long' });
const logger = bunyan.createLogger({
  name: 'app',
  stream: formatOut,
  level: 'debug',
});

// Sets up the delay between each order
const { numberOfDays } = config;
const DAY = 1000 * 60 * 60 * 24; // 1000ms * 60sec * 60min * 24hr
const daysBetweenOrders = numberOfDays * DAY;

// Authenticates with the API
const authedClient = new Gdax.AuthenticatedClient(
  process.env.API_KEY,
  process.env.SECRET,
  process.env.PASSPHRASE,
  process.env.API_URI,
);

// Configures the order product and quantity
const buyParams = {
  type: 'market',
  side: 'buy',
  product_id: 'BTC-USD', // ETH-USD and LTC-USD are other options
  size: 0.01, // 0.01 means 0.01 BTC which is both the minimum buy and increment
};

// Makes the orders and and repeats it
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
  }, daysBetweenOrders);
};

// Go time
startRecurringOrder();
