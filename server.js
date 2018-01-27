const express = require('express');
const app = express();

app.use(express.static('assets'));

app.use('/store', (req, res, next) => {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});


app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.get('/userform', (req, res) => {
  const response = {
      first_name: req.query.first_name,
      last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

app.get('/store', (req, res) => {
  res.send('To jest sklep');
})

const server = app.listen(3000, 'localhost', () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use((req, res, next) => {
  res.status(404).send('Nie mogliśmy odnaleść tego czego żądasz');
})
