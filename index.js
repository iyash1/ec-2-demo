const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hey! This is Yash. I am a developer, and I am currently running a demo EC2 server')
});
app.listen(3000, () => console.log('Server running on port 3000'));
