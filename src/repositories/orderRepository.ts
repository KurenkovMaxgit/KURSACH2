import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createOrder = async (data: {
  studentId: number;
  bookIds: Array<{ id: number }>;
  orderDate: Date;
  returnDate: Date;
}) => {
  return await prisma.order_table.create({
    data: {
      student: { connect: { id: data.studentId } },
      books: { connect: data.bookIds },
      order_date: data.orderDate,
      return_date: data.returnDate,
    },
  });
};

export const getAllOrders = async () => {
  return await prisma.order_table.findMany();
};

export const getAllOrdersByStudentId = async (studentId: number) => {
  return await prisma.order_table.findMany({
    where: { student_id: studentId },
    include: { books: true },
  });
};

export const getOrderById = async (orderId: number) => {
  return await prisma.order_table.findUnique({
    where: { id: orderId },
    include: { books: true },
  });
};

export const updateOrderById = async (
  orderId: number,
  data: {
    studentId: number;
    bookIds: Array<{ id: number }>;
    orderDate: Date;
    returnDate: Date;
  }
) => {
  return await prisma.order_table.update({
    where: { id: orderId },
    data: {
      student: { connect: { id: data.studentId } },
      books: { set: data.bookIds },
      order_date: data.orderDate,
      return_date: data.returnDate,
    },
  });
};

export const deleteOrderById = async (orderId: number) => {
  return await prisma.order_table.delete({
    where: { id: orderId },
    include: { books: true },
  });
};
