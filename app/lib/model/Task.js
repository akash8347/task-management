const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

  description: { type: String ,required:true},
  createdAt: { type: Date, default: Date.now },
  updatedAt:{type:Date},
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
});

export default mongoose.models.task || mongoose.model('task', taskSchema);


