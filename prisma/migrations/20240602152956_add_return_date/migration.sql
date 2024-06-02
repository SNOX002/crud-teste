-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluguel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userID" TEXT NOT NULL,
    "bookID" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" DATETIME,
    "available" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Aluguel_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Aluguel_bookID_fkey" FOREIGN KEY ("bookID") REFERENCES "livro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Aluguel" ("available", "bookID", "id", "returnDate", "startDate", "userID") SELECT "available", "bookID", "id", "returnDate", "startDate", "userID" FROM "Aluguel";
DROP TABLE "Aluguel";
ALTER TABLE "new_Aluguel" RENAME TO "Aluguel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
