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
![image of "trade" setting on](https://d2ffutrenqvap3.cloudfront.net/items/1V1G1U2M1u2b0H161I3a/Image%202018-01-12%20at%201.02.46%20AM.png?v=9a301ac5)

### Testing the functionality on sandbox
1. In your `config.json`, fill out the sandbox API keys, secret, and passphrase
1. Make sure in `config.json` that the `sandboxMode` is set to `true`
1. The default frequency in `config.json` is set at `numberOfDays` to `7` so you may want to change the frequency in `app.js` to something like `3000` to see a market order filled every 3 seconds
1. You may need to first deposit USD in GDAX sandbox by clicking Deposit and then choosing an amount from the Coinbase account source

### Running the app
1. In directory of the cloned repository of this project, run `node app.js`

## To do
1. Explain how to use Up to deploy

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
