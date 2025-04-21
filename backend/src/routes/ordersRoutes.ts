import { Router } from "express";
import * as orderController from "../controllers/orderController";

const router = Router();

router.post("/order", orderController.createOrder);
router.get("/order/:id", orderController.getOrderById);
router.get("/order", orderController.getAllOrders);
router.get("/order/student/:studentId", orderController.getAllOrdersByStudentId);
router.put("/order/:id", orderController.updateOrderById)
router.delete("/order/:id", orderController.deleteOrderById);


export default router;
