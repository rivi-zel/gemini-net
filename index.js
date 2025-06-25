const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    // Add your Gemini API integration here
    const response = await axios.post('https://api.gemini.com/v1/chat', {
      message: userMessage,
      apiKey: '<Your_Gemini_API_Key>'
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
