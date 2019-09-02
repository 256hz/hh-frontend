const axios = require('axios')

const constants = {
  // apiUrl: 'https://abes-helpful-demo.herokuapp.com/',
  apiUrl: 'http://localhost:3000',
  // siteUrl: 'https://abes-helpful-demo.netlify.com/',
  siteUrl: 'http://localhost:3001',
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
    // add: (num1, num2) => num1 + num2,
    // isNull: () => null,
    // isFalsy: () => undefined,
    fetchColors: () => axios
                        .get(constants.apiUrl)
                        .catch( console.log )
    
  }
}

module.exports = constants;