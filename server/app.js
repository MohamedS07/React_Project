import express from 'express';
import cors from 'cors';
import authRouter from './routers/auth.router.js';
import stockRouter from './routers/stock.router.js';

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

export default app;
