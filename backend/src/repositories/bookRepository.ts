import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

type ExistingAuthor = { id: number };
type NewAuthor = { name: string; surname: string };

type AuthorInput = ExistingAuthor | NewAuthor;

export const createBook = async (
  book: Prisma.bookCreateInput,
  authors: AuthorInput[]
) => {
  return await prisma.book.create({
    data: {
      title: book.title,
      year: Number(book.year),
      availability: book.availability,
      authors: {
        create: authors.map((author) => {
          if ("id" in author) {
            return {
              author: {
                connect: { id: author.id },
              },
            };
          } else {
            return {
              author: {
                create: {
                  name: author.name,
                  surname: author.surname,
                },
              },
            };
          }
        }),
      },
    },
  });
};

export const getAllBooks = async () => {
  return await prisma.book.findMany();
};

export const getBookById = async (bookId: number) => {
  return await prisma.book.findUnique({ where: { id: bookId } });
};

export const updateBookById = async (
  bookId: number,
  book: Prisma.bookUpdateInput,
  authors: [{ id: number }]
) => {
  return await prisma.book.update({
    where: { id: Number(bookId) },
    data: {
      title: book.title,
      year: Number(book.year),
      availability: book.availability,
      authors: {
        deleteMany: {},
        createMany: {
          data: authors.map((author) => ({
            author_id: author.id,
          })),
        },
      },
    },
  });
};

export const deleteBookById = async (bookId: number) => {
  return await prisma.book.delete({ where: { id: bookId } });
};
