const crypto = require("crypto");

const decryptWebhook = (requestBody) => {
  const encryptedResult = Buffer.from(requestBody, "base64");
  const iv = encryptedResult.slice(0, 16);
  const cipher = crypto.createDecipheriv(
    "aes-256-cbc",
    "YOUR_WEBHOOK_SECRET",
    iv
  );
  const decryptedResultBytes = Buffer.concat([
    cipher.update(encryptedResult.slice(16)),
    cipher.final(),
  ]);
  const decryptedResult = decryptedResultBytes.toString();
  const result = JSON.parse(decryptedResult);
  return result;
};

const decryptWebhookIfNeeded = (request) => {
  if (request.headers["content-type"] === "text/plain") {
    return decryptWebhook(request.body);
  } else {
    return request.body;
  }
};

module.exports = {
  decryptWebhookIfNeeded,
};
