![alt text](https://passbase.com/assets-v2/images/meta.jpg "Passbase Header")

# Passbase Webhook Server Example

This project shows you how you can catch a webhook in your Node.js Backend. It is built with [express](https://www.npmjs.com/package/express), [body-parser](https://www.npmjs.com/package/body-parser) and [cors](https://www.npmjs.com/package/cors).

Furthermore, we also show you how you can decrypt a webhook in the `webhookController`.

## Installation

Please run the following command inside this projects directory in terminal:

```python
npm install

or

yarn install
```

## Run

To start the local server, please run:

```python
npm start

or

yarn start
```

For local development, you can use a service like e.g [ngrok](https://ngrok.com/) to expose your server to the web. Start ngrok on the same port like this server e.g. with `./ngrok http 5000` This will expose you server on a public https endpoint and you can use this for the route `/passbase-webhooks`:

`https://739ca52d057d.ngrok.io/passbase-webhooks`

Now you are able to receive events on this endpoint. If you deploy this server to a hosting service, your webhook endpoint will be `YOUR_SERVER_ADDRESS/passbase-webhooks`

### Handling Encrypted Webhooks

If you are using encryption for your webhooks, please navigate to the file `webhookController.js` and add your webhook secret in line 8 for `YOUR_WEBHOOK_SECRET`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
