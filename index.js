const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const apiKey = process.env.GEMINI_API_KEY;  // Retrieves the API key from environment variables

    if (!apiKey) {
      return res.status(500).send('API Key is missing');
    }

    // Communicate with Gemini API using the secured API key.
    const response = await axios.post('https://api.gemini.com/v1/chat', {
      message: userMessage,
      apiKey: apiKey
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error communicating with Gemini API');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
