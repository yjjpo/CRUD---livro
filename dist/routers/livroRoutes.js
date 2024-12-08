"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livroController_1 = require("../controller/livroController");
const router = express_1.default.Router();
router.get('/livros', livroController_1.getLivro);
router.get('/livros/:id', livroController_1.getLivroById);
router.post('/livros', livroController_1.createLivro);
router.put('/livros/:id', livroController_1.updateLivro);
router.delete('/livros/:id', livroController_1.deleteLivro);
exports.default = router;
