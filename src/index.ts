import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT as string, 10) || 4000;

app.use(cors());
app.use(express.json());

// 📌 ตัวอย่างข้อมูล (ใช้แทน Database)
let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" }
];

// 📌 1. ดึงข้อมูลทั้งหมด (GET)
app.get("/api/items", (req: Request, res: Response) => {
  res.json(items);
});

// 📌 Start Server
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});

