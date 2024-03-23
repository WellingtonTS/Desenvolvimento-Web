import { Request, Response, NextFunction } from "express";

type AppErrors = {
  message: string;
  status: number;
};

export function appErrors(
  error: AppErrors,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("middleware error - ", error);
  return res
    .status(error.status || 500)
    .json({ message: error.message || "server error" });
}
