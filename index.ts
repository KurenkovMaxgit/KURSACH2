import express from "express";
import authorRoutes from "./src/routes/authorRoutes";
import bookRoutes from "./src/routes/bookRoutes";
import orderRoutes from "./src/routes/ordersRoutes";
import studentRoutes from "./src/routes/studentRoutes";

const app = express();
app.use(express.json());
app.use("/api", authorRoutes);
app.use("/api", bookRoutes);
app.use("/api", orderRoutes);
app.use("/api", studentRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
