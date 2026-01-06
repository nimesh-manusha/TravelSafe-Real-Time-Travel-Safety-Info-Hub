const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const dataRoutes = require('./routers/DataRoutes');

// Load environment variables from backend/.env regardless of CWD
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', dataRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'TravelSafe API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
