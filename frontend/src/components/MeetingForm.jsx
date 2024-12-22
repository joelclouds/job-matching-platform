import React, { useState } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

const MeetingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    attendees: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(formData);
    setFormData({ title: '', date: '', time: '', attendees: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
        <DatePicker
          selected={formData.date}
          onChange={(date) => setFormData({ ...formData, date })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time</label>
        <TimePicker
          selected={formData.time}
          onChange={(time) => setFormData({ ...formData, time })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="attendees" className="block text-gray-700 font-bold mb-2">Attendees</label>
        <input
          type="text"
          id="attendees"
          name="attendees"
          value={formData.attendees.join(', ')}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Schedule Meeting
      </button>
    </form>
  );
};

export default MeetingForm;
