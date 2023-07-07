const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/image', async (req, res) => {
  const imageUrl = req.query.url;
  if (imageUrl) {
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const contentType = response.headers['content-type'];
      res.set('Content-Type', contentType);
      res.send(response.data);
    } catch (error) {
      res.status(500).send(error.toString());
    }
  } else {
    res.status(400).send('No image URL provided.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
