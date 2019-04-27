// Unit tests with Jest
const axios = require('axios');

const functions = {
    fetchAPI: () =>
    axios.get("http://localhost:3000/cards")
     .then(res => res.data)
     .catch(err => 'error')
};

module.exports = functions;

