const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['online', 'offline'] },
  dueDate: { type: Date },
  totalScore: {type: Number, required:true}
  // ... other fields
});

module.exports = mongoose.model('Assessment', assessmentSchema);