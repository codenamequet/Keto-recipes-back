const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect('mongodb://localhost/seeds', {useMongoClient: true});
  }

// mongoose.connect('mongodb://localhost/recipes', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
