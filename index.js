const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello It's working --------------")
});

app.listen(3000, () => {
  console.log('Server Running on the ', 3000);
})