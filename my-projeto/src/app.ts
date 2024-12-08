import express from 'express';
import livroRoutes from './routers/livroRoutes';

const app = express();

app.use(express.json());
app.use('/api', livroRoutes);

export default app;
