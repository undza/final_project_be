import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const task = mongoose.model('Messages', MessageSchema);

export default task;
