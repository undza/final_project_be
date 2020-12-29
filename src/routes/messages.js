import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// GET /messages
router.get('/', async (req, res) => {
  try {
    const query = Message.find({}).sort({ createdAt: -1 });
    const messages = await query.exec();
    res.json(messages);
  } catch (err) {
    res.json({ message: 'Something went wrong' });
  }
});

// POST /messages

router.post('/', async (req, res) => {
  const message = new Message({
    username: req.body.username,
    message: req.body.message,
  });

  try {
    const data = await message.save();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const query = Message.deleteMany({});
    await query.exec();

    res.json({ message: 'messages deleted' });
  } catch (err) {
    res.json({ message: 'Something went wrong', a: 'Dieded' });
  }
});

// DELETE /messages/123123123
router.delete('/:messageid', async (req, res) => {
  try {
    const query = Message.deleteOne({
      _id: req.params.messageid,
    });
    await query.exec();

    res.json({ message: 'message deleted' });
  } catch (err) {
    res.json({ message: 'Something went wrong' });
  }
});

export default router;
