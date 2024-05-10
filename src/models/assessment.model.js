const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['online', 'offline'] },
  dueDate: { type: Date },
  Grades: {type: Number, required:true},
  course_id: { type: String, required: true },
  course_name: { type: String, required: true },
  student_id: { type: Number, required: true },
  Feedback: { type: String, required: true }
});

module.exports = mongoose.model('Assessment', assessmentSchema);