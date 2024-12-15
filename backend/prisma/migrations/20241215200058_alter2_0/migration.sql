/*
  Warnings:

  - You are about to drop the column `createdAt` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `produto` table. All the data in the column will be lost.
  - You are about to alter the column `preco` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL
);
INSERT INTO "new_produto" ("descricao", "id", "nome", "preco") SELECT "descricao", "id", "nome", "preco" FROM "produto";
DROP TABLE "produto";
ALTER TABLE "new_produto" RENAME TO "produto";
CREATE UNIQUE INDEX "produto_nome_key" ON "produto"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
