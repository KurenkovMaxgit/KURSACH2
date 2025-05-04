import { Request, Response } from "express";
import * as authorRepository from "../repositories/authorRepository";

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newAuthor = await authorRepository.createAuthor(data);
    res.status(201).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad request" });
  }
};

export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorRepository.getAllAuthors();
    res.json(authors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving authors" });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await authorRepository.getAuthorById(Number(req.params.id));
    res.json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving author" });
  }
};

export const updateAuthorById = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const author = await authorRepository.updateAuthorById(
      Number(req.params.id),
      data
    );
    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating author" });
  }
};

export const deleteAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await authorRepository.deleteAuthorById(Number(req.params.id));
    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting author" });
  }
};