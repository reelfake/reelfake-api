import type {
  NextFunction,
  Request,
  Response,
} from "express";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Reelfake API...");
});

export default app;
