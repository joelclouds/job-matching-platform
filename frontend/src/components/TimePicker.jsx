import React from 'react';
import { TimePicker as MUITimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const TimePicker = ({ selected, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUITimePicker
        label="Time"
        value={selected ? dayjs(selected) : null}
        onChange={(time) => onChange(time ? time.toDate() : null)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
