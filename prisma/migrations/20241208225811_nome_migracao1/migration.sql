-- CreateTable
CREATE TABLE "Livro" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Autor" TEXT NOT NULL,
    "AnoPubli" INTEGER NOT NULL,
    "Genero" TEXT NOT NULL
);
