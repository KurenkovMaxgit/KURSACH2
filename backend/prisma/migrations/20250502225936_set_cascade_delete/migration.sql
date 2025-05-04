-- DropForeignKey
ALTER TABLE "author_mm_book" DROP CONSTRAINT "author_mm_book_book_id_fkey";

-- AddForeignKey
ALTER TABLE "author_mm_book" ADD CONSTRAINT "author_mm_book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
