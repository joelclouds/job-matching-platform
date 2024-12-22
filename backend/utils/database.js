let meetings = [];
let currentId = 1;

const getMeetings = () => meetings;

const addMeeting = (meetingData) => {
  const newMeeting = { id: currentId++, ...meetingData };
  meetings.push(newMeeting);
  return newMeeting;
};

const updateMeeting = (id, meetingData) => {
  const meetingIndex = meetings.findIndex((m) => m.id === parseInt(id));
  if (meetingIndex !== -1) {
    meetings[meetingIndex] = { id, ...meetingData };
    return meetings[meetingIndex];
  }
  return null;
};

const deleteMeeting = (id) => {
  meetings = meetings.filter((m) => m.id !== parseInt(id));
};

module.exports = { getMeetings, addMeeting, updateMeeting, deleteMeeting };
utils/notifications.js

const sendNotification = (message) => {
  console.log(`Notification sent: ${message}`);
};

module.exports = { sendNotification };
utils/timezones.js

const convertToUTC = (dateString) => {
  return new Date(dateString).toISOString();
};

module.exports = { convertToUTC };
