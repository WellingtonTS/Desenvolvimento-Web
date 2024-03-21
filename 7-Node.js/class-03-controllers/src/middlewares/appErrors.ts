import { Request, Response, NextFunction } from "express";

type AppErrors = {
    status: number;
    message: string;
};

export function appErrors(
  error: AppErrors,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Middleware Erros:", error);
  res.status(error.status || 500);
  res.json({message: error.message || "Server error!"});
}
