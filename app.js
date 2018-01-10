const Gdax = require('gdax');
const bformat = require('bunyan-format');
const bunyan = require('bunyan');

const formatOut = bformat({ outputMode: 'long' });
const logger = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' });

const config = require('./config');
const CONSTS = require('./CONSTS');

const apiURI = config.sandboxMode ? CONSTS.sandboxURI : CONSTS.productionURI;

const authedSandboxClient = new Gdax.AuthenticatedClient(
  config.gdax.sandbox.apiKey,
  config.gdax.sandbox.secret,
  config.gdax.sandbox.passPhrase,
  apiURI,
);

const buyParams = {
  product_id: CONSTS.BTCUSD,
  size: 0.01,
  price: 100,
};

// Creates an order for 0.01 BTC at $100 USD every 0.3 seconds
const buyBTC = () => {
  authedSandboxClient.buy(buyParams)
  .then((data) => { logger.info(data); })
  .catch((error) => { logger.error(error); });

  setTimeout(() => {
    buyBTC();
  }, 300);
};

buyBTC();
