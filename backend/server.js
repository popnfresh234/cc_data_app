const express = require('express');
require('dotenv').config();

const app = express();
const fetch = require('node-fetch');

const port = 3001;

app.get('/', (req, res) => {
  console.log('connected');

  res.send('hello world');
});

const getCustomers = (cursor) => {
  console.log(cursor);
  let url = 'https://connect.squareup.com/v2/customers';
  if (cursor) {
    url = `${url}?cursor=${cursor}`;
  }
  fetch(url, {
    method: 'GET',
    headers: {
      'square-version': '2020-04-22',
      authorization: process.env.TOKEN,
      'content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then((jsonResult) => {
      if (jsonResult.cursor) {
        getCustomers(jsonResult.cursor);
      }
      return jsonResult.customers;
    })
    .catch((err) => {
      console.log(err);
    });
};

app.get('/customers/', (req, res) => {
  console.log('Endpoint: customers');
  console.log(getCustomers(req.cursor));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
