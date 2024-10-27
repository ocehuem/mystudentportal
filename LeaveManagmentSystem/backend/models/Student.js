const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  parentPhone: String,
  childId: { type: String, unique: true },
});

module.exports = mongoose.model('Student', StudentSchema);
