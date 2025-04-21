import { Router } from "express";
import * as authorController from "../controllers/authorController";

const router = Router();

router.post("/author", authorController.createAuthor);
router.get("/author/:id", authorController.getAuthorById);
router.get("/author", authorController.getAllAuthors);
router.put("/author/:id", authorController.updateAuthorById)
router.delete("/author/:id", authorController.deleteAuthorById);


export default router;
