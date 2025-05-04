import { Request, Response } from "express";
import * as bookRepository from "../repositories/bookRepository";

export const createBook = async (req: Request, res: Response) => {
  try {
    const {book, authors} = req.body
    const newBook = await bookRepository.createBook(book, authors );
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad request" });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await bookRepository.getBookById(Number(req.params.id));
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving book" });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving books" });
  }
};

export const updateBookById = async (req: Request, res: Response) => {
  try {
    const { title, year, availability, authors } = req.body;
    const book = await bookRepository.updateBookById(
      Number(req.params.id),
      {title: title, year: year, availability: availability},
      authors
    );
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating book" });
  }
};

export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const book = await bookRepository.deleteBookById(Number(req.params.id));
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting book" });
  }
};
