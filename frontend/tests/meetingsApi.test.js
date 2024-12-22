const request = require('supertest');
const app = require('../server');
const db = require('../utils/database');

beforeEach(() => {
  db.getMeetings().length = 0; // Clear meetings before each test
});

test('GET /api/meetings returns an empty array initially', async () => {
  const response = await request(app).get('/api/meetings');
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual([]);
});

test('POST /api/meetings adds a new meeting', async () => {
  const meetingData = {
    title: 'Test Meeting',
    date: '2023-10-01T12:00:00Z',
    time: '2023-10-01T12:00:00Z',
    attendees: ['John Doe', 'Jane Smith'],
  };

  const response = await request(app).post('/api/meetings').send(meetingData);
  expect(response.statusCode).toBe(201);
  expect(response.body).toEqual(expect.objectContaining(meetingData));
});