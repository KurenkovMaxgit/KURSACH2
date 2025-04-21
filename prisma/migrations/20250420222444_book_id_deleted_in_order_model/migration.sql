/*
  Warnings:

  - You are about to drop the column `book_id` on the `order_table` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "idx_order_book";

-- AlterTable
ALTER TABLE "order_table" DROP COLUMN "book_id";
