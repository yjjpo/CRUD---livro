/*
  Warnings:

  - The primary key for the `Livro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AnoPublicacao` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `Autor` on the `Livro` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Livro` table. All the data in the column will be lost.
  - Added the required column `AnoPubli` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Id` to the `Livro` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livro" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "AnoPubli" INTEGER NOT NULL,
    "Genero" TEXT NOT NULL
);
INSERT INTO "new_Livro" ("Genero", "Titulo") SELECT "Genero", "Titulo" FROM "Livro";
DROP TABLE "Livro";
ALTER TABLE "new_Livro" RENAME TO "Livro";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
