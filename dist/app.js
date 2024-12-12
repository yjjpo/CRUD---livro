"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const livroRoutes_1 = __importDefault(require("./routers/livroRoutes"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORTA = 4000;
const prisma = new client_1.PrismaClient();
// Middleware
app.use(express_1.default.json());
// Root route
app.get('/', (req, res) => {
    res.send('Teste');
});
// Mounting the authRouters on /api
app.use('/api', livroRoutes_1.default);
app.listen(PORTA, () => {
    console.log(`Servidor executando na porta: ${PORTA}`);
});
