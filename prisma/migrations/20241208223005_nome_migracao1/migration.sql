-- CreateTable
CREATE TABLE "Livro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Autor" TEXT NOT NULL,
    "AnoPublicacao" INTEGER NOT NULL,
    "Genero" TEXT NOT NULL
);
