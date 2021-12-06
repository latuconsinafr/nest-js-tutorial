import { NextFunction } from 'express';
import { Request } from 'supertest';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request...');
  next();
}
