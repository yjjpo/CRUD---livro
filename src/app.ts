import express from 'express';
import livroRoutes from './routers/livroRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', livroRoutes);


app.get('/', (req, res) => {
    res.send('Servidor rodando!');
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

export default app;
