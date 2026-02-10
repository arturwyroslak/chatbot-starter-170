const request = require('supertest');
const app = require('../server');

describe('POST /api/chat', () => {
  test('returns 400 for invalid payload', async () => {
    const res = await request(app).post('/api/chat').send({});
    expect(res.statusCode).toBe(400);
  });

  test('returns reply for valid message', async () => {
    const res = await request(app).post('/api/chat').send({ message: 'Hello' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('reply');
  });
});
