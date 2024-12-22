import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetingCard from '../src/components/MeetingCard';

test('renders MeetingCard component with meeting details', () => {
  const meeting = {
    id: 1,
    title: 'Test Meeting',
    date: '2023-10-01T12:00:00Z',
    time: '2023-10-01T12:00:00Z',
    attendees: ['John Doe', 'Jane Smith'],
  };

  render(<MeetingCard meeting={meeting} />);
  expect(screen.getByText(/Test Meeting/i)).toBeInTheDocument();
  expect(screen.getByText(/10\/1\/2023/i)).toBeInTheDocument();
  expect(screen.getByText(/12:00:00 PM/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe, Jane Smith/i)).toBeInTheDocument();
});