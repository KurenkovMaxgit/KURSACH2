-- DropForeignKey
ALTER TABLE "order_table" DROP CONSTRAINT "ordertable_student_id_fkey";

-- AddForeignKey
ALTER TABLE "order_table" ADD CONSTRAINT "ordertable_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
