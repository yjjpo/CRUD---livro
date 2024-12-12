"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLivro = exports.updateLivro = exports.createLivro = exports.getLivroById = exports.getLivro = void 0;
const client_1 = require("@prisma/client");
const TratamentoErro_1 = require("../utils/TratamentoErro");
const prisma = new client_1.PrismaClient();
const getLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield prisma.livro.findMany();
        res.json(livros);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os livros' });
    }
});
exports.getLivro = getLivro;
const getLivroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const livro = yield prisma.livro.findUnique({ where: { Id: Number(id) } });
        if (livro) {
            res.json(livro);
        }
        else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o livro' });
    }
});
exports.getLivroById = getLivroById;
const createLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Titulo, Autor, AnoPubli, Genero } = req.body;
    try {
        const novoLivro = yield prisma.livro.create({
            data: { Titulo, Autor, AnoPubli, Genero },
        });
        res.status(201).json(novoLivro);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar o livro' });
    }
});
exports.createLivro = createLivro;
const updateLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Titulo, Autor, AnoPubli, Genero } = req.body;
    try {
        const livroAtualizado = yield prisma.livro.update({
            where: { Id: Number(id) },
            data: { Titulo, Autor, AnoPubli, Genero },
        });
        res.json(livroAtualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o livro' });
    }
});
exports.updateLivro = updateLivro;
const deleteLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.livro.delete({ where: { Id: Number(id) } });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: TratamentoErro_1.ErrorRequest });
    }
});
exports.deleteLivro = deleteLivro;
