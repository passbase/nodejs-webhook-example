const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const webhookHelper = require("./webhookController");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

const processWebhook = (request) => {
  const webhook = webhookHelper.decryptWebhookIfNeeded(request);
  console.log(webhook);

  switch (webhook.event) {
    case "VERIFICATION_COMPLETED":
      // Do logic here for VERIFICATION_COMPLETED event
      break;
    case "VERIFICATION_REVIEWED":
      // Do logic here for VERIFICATION_REVIEWED event
      break;
    default:
      console.log("Couldn't process webhook event");
  }
};

app.post("/passbase-webhooks", (req, res) => {
  processWebhook(req);
  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
