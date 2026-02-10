function generateReply(message) {
  // Simple deterministic reply engine for starter project.
  // Strategy: echo intent with minor transformation.
  if (!message || typeof message !== 'string') {
    throw new TypeError('message must be a string');
  }
  const trimmed = message.trim();
  if (trimmed.length === 0) return "Proszę wpisać wiadomość.";

  const lowered = trimmed.toLowerCase();
  if (lowered.includes('cześć') || lowered.includes('hej')) {
    return 'Cześć! Jak mogę pomóc?';
  }
  if (lowered.includes('jak') && lowered.includes('masz')) {
    return 'Dziękuję, mam się dobrze!';
  }
  // default: reverse the message as a playful reply
  return trimmed.split('').reverse().join('');
}

module.exports = { generateReply };
