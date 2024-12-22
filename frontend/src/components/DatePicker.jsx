import React from 'react';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const DatePicker = ({ selected, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDatePicker
        label="Date"
        value={selected ? dayjs(selected) : null}
        onChange={(date) => onChange(date ? date.toDate() : null)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
