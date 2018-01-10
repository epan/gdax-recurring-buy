const Gdax = require('gdax');
const bformat = require('bunyan-format');
const bunyan = require('bunyan');

const formatOut = bformat({ outputMode: 'long' });
const logger = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' });

const config = require('./config');

const apiURI = config.sandboxMode ? 'https://api-public.sandbox.gdax.com' : 'https://api.gdax.com'

const authedSandboxClient = new Gdax.AuthenticatedClient(
  config.gdax.sandbox.apiKey,
  config.gdax.sandbox.secret,
  config.gdax.sandbox.passPhrase,
  apiURI,
);

authedSandboxClient.getAccounts()
  .then((data) => { logger.info(data); })
  .catch((error) => { logger.error(error); });
