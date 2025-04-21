import { Router } from "express";
import * as bookController from "../controllers/bookController";

const router = Router();

router.post("/book", bookController.createBook);
router.get("/book/:id", bookController.getBookById);
router.get("/book", bookController.getAllBooks);
router.put("/book/:id", bookController.updateBookById)
router.delete("/book/:id", bookController.deleteBookById);


export default router;
