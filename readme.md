### WARNING: USE AT YOUR OWN RISK, I TAKE NO RESPONSIBILITY FOR ANY TRANSACTIONS THAT TAKE PLACE

# GDAX Recurring Buy Script

Recurring buy of bitcoin via the GDAX API

### Prerequisites
1. You will need an account with GDAX, with API credentials. To be safe, only give your API credentials "trade" permissions.
2. You will need to be able to run NodeJS 8.0+
3. Enough USD in your GDAX account.

### Installing
1. Clone this repository
2. Run `npm install` or `yarn`
3. Fill in configuration file at `./config.json`, see `./config.example.json` for an example.

### Getting API keys
1. You may need to [register for Coinbase](https://www.coinbase.com/join/52fb1644307058e4db00003f) to access GDAX
1. Create GDAX sandbox API keys with "trade" permissions at [https://public.sandbox.gdax.com/settings/api/](https://public.sandbox.gdax.com/settings/api)
1. Create GDAX API keys with "trade" permissions at [https://www.gdax.com/settings/api](https://www.gdax.com/settings/api)

### Testing the functionality on sandbox
1. In your `config.json`, fill out the sandbox API keys, secret, and passphrase
1. Make sure in `config.json` that the `sandboxMode` is set to `true`

### Running the app
1. In directory of the cloned repository of this project, run `node app.js`

## To do
1. Explain how to use Up to deploy

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
