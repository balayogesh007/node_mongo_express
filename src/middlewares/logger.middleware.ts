import { Request, Response, NextFunction } from 'express';

export class LoggerMiddleware {
  constructor() {
    this.logger;
  }
  public async logger(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Req Header: ${JSON.stringify(req?.headers)} - Req Body: ${JSON.stringify(
        req?.body
      )} - Req url: ${req?.originalUrl}`
    );
    next();
  }
}
