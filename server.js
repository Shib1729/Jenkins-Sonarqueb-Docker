const express = require('express');
const app = express();
const path = require('path');

// Serve static files (HTML, CSS, Images)
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// An API endpoint for testing (Jenkins can check this later)
app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK", server: "EC2-Test-Instance" });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
