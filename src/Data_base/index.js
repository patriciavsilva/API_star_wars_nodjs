const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/planetas',{userMongoClient: true})
mongoose.Promise = global.Promise

module.exports = mongoose