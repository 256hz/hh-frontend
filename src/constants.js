const axios = require('axios')

// Holds the api URLs, list of filters, and a function for testing the API response.
const constants = {
  apiUrl: 'https://abes-helpful-demo.herokuapp.com/',
  apiTestUrl: 'http://localhost:3000',
  siteUrl: 'https://abes-helpful-demo.netlify.com/',
  siteTestUrl: 'http://localhost:3001',
  filters: [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
    'brown',
    'gray'
  ],
  functions: {
    // Test functions
    // add: (num1, num2) => num1 + num2,
    // isNull: () => null,
    // isFalsy: () => undefined,
    fetchColors: () => axios
                        .get(constants.apiUrl)
                        .catch( console.log )
    
  }
}

module.exports = constants;