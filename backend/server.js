const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const meetingRoutes = require('./routes/meetings');
app.use('/api/meetings', meetingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
