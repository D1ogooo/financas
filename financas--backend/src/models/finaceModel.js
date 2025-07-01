const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
});

const Finance = mongoose.model('Finance', FinanceSchema);
module.exports = Finance;