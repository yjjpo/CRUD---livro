import express from 'express'
import dotenv from 'dotenv'
import authRouters from './routers/livroRoutes'
import { PrismaClient } from '@prisma/client';

dotenv.config()
const app = express()
const PORTA = 4000;
const prisma = new PrismaClient();

// Middleware
app.use(express.json())

// Root route
app.get('/', (req, res) => {
    res.send('Teste');
});

// Mounting the authRouters on /api
app.use('/api', authRouters)

app.listen(PORTA, () => {
    console.log(`Servidor executando na porta: ${PORTA}`)
})
