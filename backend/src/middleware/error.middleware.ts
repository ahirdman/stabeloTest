import { NextFunction, Request, Response } from "express";

import HttpException from "../utils/http-exception";

export const errorHandler = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).json(error.message);
};
