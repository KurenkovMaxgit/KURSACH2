import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createStudent = async (student: Prisma.studentCreateInput) => {
  return await prisma.student.create({ data: student });
};

export const getAllStudents = async () => {
  return await prisma.student.findMany();
};

export const getStudentById = async (studentId: number) => {
  return await prisma.student.findUnique({ where: { id: studentId } });
};

export const updateStudentById = async (studentId: number, student: Prisma.studentUpdateInput) => {
  return await prisma.student.update({where:{id: studentId}, data: student})
}

export const deleteStudentById = async (studentId: number) => {
  return await prisma.student.delete({ where: { id: studentId } });
};
