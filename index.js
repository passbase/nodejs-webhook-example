const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/passbase-webhooks", (req, res) => {
  const data = req.body;
  console.log(data);

  switch (data.event) {
    case "AUTHENTICATION_PROCESSED":
      console.log("AUTHENTICATION_PROCESSED");
      // Do logic here for AUTHENTICATION_PROCESSED event
      break;
    case "AUTHENTICATION_REVIEW_STATUS_CHANGED":
      // Do logic here for AUTHENTICATION_REVIEW_STATUS_CHANGED event
      break;
    default:
      console.log("Couldn't process webhook event");
  }
  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
