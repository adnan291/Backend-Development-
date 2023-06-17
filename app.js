const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readFile('username.txt', (err, data) => {
    if (err) {
      console.log(err);
      data = 'No Chat Exist';
    }
    res.send(`
      ${data}
      <form action="/" method="POST">
        <input type="text" id="message" name="message">
        <input type="hidden" id="username" name="username" value="">
        <br>
        <button type="submit">Send</button>
      </form>
      <script>
        document.getElementById('username').value = localStorage.getItem('username');
      </script>
    `);
  });
});

app.post('/', (req, res) => {
  const { username, message } = req.body;
  console.log(username);
  console.log(message);
  fs.writeFile('username.txt', `${username}: ${message}\n`, { flag: 'a' }, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

app.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" id="username" name="username"><br/>
      <button type="submit">Send</button>
    </form>
    <script>
      document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem('username', document.getElementById('username').value);
        window.location.href = '/';
      });
    </script>
  `);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});