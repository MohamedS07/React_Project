const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/auth.router');
const stockRouter = require('./routers/stock.router');

const app = express();

app.use(express.json());
app.use(cors());

// Register the authentication router
app.use('/auth', authRouter);

// Register the stock router
app.use('/api/stocks', stockRouter);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome! Your backend structure is ready 🚀');
});

module.exports = app;
