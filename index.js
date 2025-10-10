// index.js
const express = require('express');
const app = express();

app.use(express.json());

// Helper validator
function isNumber(n) {
  return typeof n === 'number' && Number.isFinite(n);
}

// POST /add  { a: number, b: number }
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (!isNumber(a) || !isNumber(b)) return res.status(400).json({ error: 'a and b must be numbers' });
  res.json({ result: a + b });
});

// POST /subtract
app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  if (!isNumber(a) || !isNumber(b)) return res.status(400).json({ error: 'a and b must be numbers' });
  res.json({ result: a - b });
});

// POST /multiply
app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!isNumber(a) || !isNumber(b)) return res.status(400).json({ error: 'a and b must be numbers' });
  res.json({ result: a * b });
});

// POST /divide
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (!isNumber(a) || !isNumber(b)) return res.status(400).json({ error: 'a and b must be numbers' });
  if (b === 0) return res.status(400).json({ error: 'division by zero' });
  res.json({ result: a / b });
});

// export app for tests
module.exports = app;

// start server only when run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Calculator API listening on ${PORT}`));
}
//trigger CI test
