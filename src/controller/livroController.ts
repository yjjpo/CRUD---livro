import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { ErrorRequest } from '../utils/TratamentoErro';

const prisma = new PrismaClient();

export const getLivro = async (req: Request, res: Response) => {
  try {
    const livros = await prisma.livro.findMany();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
};

export const getLivroById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const livro = await prisma.livro.findUnique({ where: { Id: Number(id) } });
    if (livro) {
      res.json(livro);
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o livro' });
  }
};

export const createLivro = async (req: Request, res: Response) => {
  const { Titulo, Autor, AnoPubli, Genero } = req.body;
  try {
    const novoLivro = await prisma.livro.create({
      data: { Titulo, Autor, AnoPubli, Genero },
    });
    res.status(201).json(novoLivro)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o livro' });
  }
};

export const updateLivro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Titulo, Autor, AnoPubli, Genero } = req.body;
  try {
    const livroAtualizado = await prisma.livro.update({
      where: { Id: Number(id) },
      data: { Titulo, Autor, AnoPubli, Genero },
    });
    res.json(livroAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
};

export const deleteLivro = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.livro.delete({ where: { Id: Number(id) } });
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: ErrorRequest });
  }
};
