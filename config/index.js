var configValues = require('./config');

module.exports = {
   getDbConnectionString:  function() {
        return "mongodb://"+ configValues.uname +":"+ configValues.pwd +"@ds131971.mlab.com:31971/nodetodosample"
    }
}