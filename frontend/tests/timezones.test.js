const { convertToUTC } = require('../utils/timezones');

test('converts date string to UTC', () => {
  const dateString = '2023-10-01T12:00:00';
  const utcDate = convertToUTC(dateString);
  expect(utcDate).toBe('2023-10-01T12:00:00.000Z');
});