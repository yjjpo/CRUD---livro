import express from 'express';
import dotenv from 'dotenv';
import livroRouters from './routers/livroRoutes';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const PORTA = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Oie');
});

app.use('/api', livroRouters);

app.listen(PORTA, () => {
  console.log(`Servidor executando na porta: ${PORTA}`);
});
