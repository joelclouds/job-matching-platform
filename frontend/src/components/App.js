import React, { useState, useEffect } from 'react';
import MeetingForm from './components/MeetingForm';
import MeetingCard from './components/MeetingCard';
import axios from 'axios';

const App = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('/api/meetings');
      setMeetings(response.data);
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  const addMeeting = async (meeting) => {
    try {
      await axios.post('/api/meetings', meeting);
      fetchMeetings();
    } catch (error) {
      console.error('Error adding meeting:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Schedule a Meeting</h1>
      <MeetingForm onSubmit={addMeeting} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Scheduled Meetings</h2>
      <div className="flex flex-wrap">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
};

export default App;
