// tests/calculator.test.js
const request = require('supertest');
const app = require('../index');

describe('Calculator API', () => {
  test('adds numbers', async () => {
    const res = await request(app).post('/add').send({ a: 3, b: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result', 5);
  });

  test('subtracts numbers', async () => {
    const res = await request(app).post('/subtract').send({ a: 7, b: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('multiplies numbers', async () => {
    const res = await request(app).post('/multiply').send({ a: 4, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });

  test('divides numbers', async () => {
    const res = await request(app).post('/divide').send({ a: 10, b: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('division by zero returns 400', async () => {
    const res = await request(app).post('/divide').send({ a: 1, b: 0 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('invalid input returns 400', async () => {
    const res = await request(app).post('/add').send({ a: 'x', b: 2 });
    expect(res.statusCode).toBe(400);
  });
});
