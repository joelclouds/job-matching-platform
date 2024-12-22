import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MeetingForm from '../src/components/MeetingForm';

test('renders MeetingForm component', () => {
  render(<MeetingForm onSubmit={() => {}} />);
  expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Attendees/i)).toBeInTheDocument();
});

test('submits form with valid data', () => {
  const mockSubmit = jest.fn();
  render(<MeetingForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Meeting' } });
  fireEvent.change(screen.getByLabelText(/Attendees/i), { target: { value: 'John Doe, Jane Smith' } });
  fireEvent.click(screen.getByText(/Schedule Meeting/i));

  expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({ title: 'Test Meeting', attendees: ['John Doe', 'Jane Smith'] }));
});