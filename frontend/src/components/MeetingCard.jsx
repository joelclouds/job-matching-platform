import React from 'react';

const MeetingCard = ({ meeting }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{meeting.title}</div>
        <p className="text-gray-700 text-base">
          Date: {new Date(meeting.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-base">
          Time: {new Date(meeting.time).toLocaleTimeString()}
        </p>
        <p className="text-gray-700 text-base">
          Attendees: {meeting.attendees.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MeetingCard;
