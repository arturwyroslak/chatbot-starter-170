const express = require('express');
const router = express.Router();
const { generateReply } = require('../../src/chatbot');

router.post('/', (req, res) => {
  try {
    const { message } = req.body || {};
    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Invalid message' });
    }
    const reply = generateReply(message);
    return res.json({ reply });
  } catch (err) {
    console.error('Error in /api/chat:', err);
    return res.status(500).json({ error: 'Failed to process message' });
  }
});

module.exports = router;
