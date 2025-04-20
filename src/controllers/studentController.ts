import { Request, Response } from "express";
import * as studentRepository from "../repositories/studentRepository";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newStudent = await studentRepository.createStudent(data);
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad request" });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentRepository.getStudentById(Number(req.params.id));
    res.json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving student" });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentRepository.getAllStudents();
    res.json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving students" });
  }
};

export const updateStudentById = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const student = await studentRepository.updateStudentById(
      Number(req.params.id),
      data
    );
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting student" });
  }
};

export const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentRepository.deleteStudentById(Number(req.params.id));
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting student" });
  }
};