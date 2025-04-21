-- CreateTable
CREATE TABLE "author" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "surname" VARCHAR(100) NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "author_mm_book" (
    "author_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "author_mm_book_pkey" PRIMARY KEY ("author_id","book_id")
);

-- CreateTable
CREATE TABLE "book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "year" INTEGER,
    "availability" BOOLEAN DEFAULT true,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_table" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "order_date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "return_date" DATE,

    CONSTRAINT "ordertable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "surname" VARCHAR(100) NOT NULL,
    "faculty" VARCHAR(100),
    "phone" VARCHAR(20),

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_book_mm_order" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_book_mm_order_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "fki_author " ON "author_mm_book"("author_id");

-- CreateIndex
CREATE INDEX "fki_ref_book" ON "author_mm_book"("book_id");

-- CreateIndex
CREATE INDEX "idx_book_title" ON "book"("title");

-- CreateIndex
CREATE INDEX "idx_order_book" ON "order_table"("book_id");

-- CreateIndex
CREATE INDEX "idx_order_student" ON "order_table"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "student_phone_key" ON "student"("phone");

-- CreateIndex
CREATE INDEX "idx_student_phone" ON "student"("phone");

-- CreateIndex
CREATE INDEX "_book_mm_order_B_index" ON "_book_mm_order"("B");

-- AddForeignKey
ALTER TABLE "author_mm_book" ADD CONSTRAINT "author_mm_book_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "author_mm_book" ADD CONSTRAINT "author_mm_book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_table" ADD CONSTRAINT "ordertable_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_book_mm_order" ADD CONSTRAINT "_book_mm_order_A_fkey" FOREIGN KEY ("A") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_mm_order" ADD CONSTRAINT "_book_mm_order_B_fkey" FOREIGN KEY ("B") REFERENCES "order_table"("id") ON DELETE CASCADE ON UPDATE CASCADE;
