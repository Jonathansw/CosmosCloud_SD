var mongoose = require('mongoose');

var nodeSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: [true, 'IP Required']
  },
  name: {
    type: String,
    default: ''
  },
  modules: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('Nodes', nodeSchema);
