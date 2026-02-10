const { generateReply } = require('../src/chatbot');

test('generates greeting reply', () => {
  expect(generateReply('Cześć')).toMatch(/Cześć/);
});

test('handles empty message', () => {
  expect(generateReply('   ')).toContain('Proszę');
});

test('reverses unknown message', () => {
  expect(generateReply('abc')).toBe('cba');
});
