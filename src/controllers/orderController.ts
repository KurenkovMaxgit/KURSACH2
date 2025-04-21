import { Request, Response } from "express";
import * as orderRepository from "../repositories/orderRepository";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    data.orderDate = new Date();
    const newOrder = await orderRepository.createOrder(data);
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad request" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderRepository.getOrderById(Number(req.params.id));
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving order" });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderRepository.getAllOrders();
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving orders" });
  }
};

export const getAllOrdersByStudentId = async (req: Request, res: Response) => {
  try {
    const orders = await orderRepository.getAllOrdersByStudentId(
      Number(req.params.studentId)
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving order" });
  }
};

export const updateOrderById = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const order = await orderRepository.updateOrderById(
      Number(req.params.id),
      data
    );
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating order" });
  }
};

export const deleteOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderRepository.deleteOrderById(Number(req.params.id));
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting order" });
  }
};
