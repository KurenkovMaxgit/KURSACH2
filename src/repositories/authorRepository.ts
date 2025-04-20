import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createAuthor = async (author: Prisma.authorCreateInput) => {
  return await prisma.author.create({ data: author });
};

export const getAllAuthors = async () => {
  return await prisma.author.findMany();
};

export const getAuthorById = async (authorId: number) => {
  return await prisma.author.findUnique({ where: { id: authorId } });
};

export const updateAuthorById = async (authorId: number, author: Prisma.authorUpdateInput) => {
  return await prisma.author.update({where:{id: authorId}, data: author})
}

export const deleteAuthorById = async (authorId: number) => {
    return await prisma.author.delete({where:{id: authorId}})
};
