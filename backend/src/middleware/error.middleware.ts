import HttpException from '../utils/http-exception';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).json(error.message);
};
