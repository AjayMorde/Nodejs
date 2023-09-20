const express = require('express');
const router = express.Router();
const data = require('./data'); // Assuming data is an array defined in a separate file

router.get('/', (req, res, next) => {
  const messages = data.map((message) => {
    const [username, text] = message.split(':');
    return { username, text };
  });

  res.send(`
    <form action="/" method="POST">
      <input id="message" name="message" type="text" placeholder="message">
      <input id="username" name="username" type="text" placeholder="username">
      <button type="submit">Send</button>
    </form>
    <h2>Messages:</h2>
    <ul>
      ${messages.map((message) => `<li>${message.username}: ${message.text}</li>`).join('')}
    </ul>
  `);
});

router.post('/', (req, res, next) => {
  const { username, message } = req.body;
  if (username && message) {
    data.push(`${username}:${message}`);
    console.log(data);
  }
  res.redirect('/');
});

module.exports = router;
