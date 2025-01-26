const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});