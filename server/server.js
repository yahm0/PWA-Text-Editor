const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const middleware = require('./config/middleware');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pwa-text-editor';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Apply middleware
middleware(app);

// Serve static files from the client
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Use API routes
app.use('/api', apiRoutes);

// Serve the main HTML file for the app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
