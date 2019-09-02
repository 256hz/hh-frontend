const axios = require('axios')

const constants = {
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
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    isFalsy: () => undefined,
    fetchColors: () => axios
                        .get('http://localhost:3000')
                        .catch( console.log )
    
  }
}

module.exports = constants;