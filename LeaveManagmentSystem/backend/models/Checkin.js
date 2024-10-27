const mongoose = require('mongoose');

const CheckinSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  checkinTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Checkin', CheckinSchema);
