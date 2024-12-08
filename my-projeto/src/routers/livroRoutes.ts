import express from 'express';
import { getLivro, getLivroById, createLivro, updateLivro, deleteLivro } from '../controller/livroController';

const router = express.Router();

router.get('/livros', getLivro);
router.get('/livros/:id', getLivroById);
router.post('/livros', createLivro);
router.put('/livros/:id', updateLivro);
router.delete('/livros/:id', deleteLivro);

export default router;
