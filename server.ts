import Express, { Request, Response } from 'express';
import 'dotenv/config';
import { BooksController } from './src/modules/books/books.controller';
import bodyParser from 'body-parser';
import { DatabaseConnection } from './src/database/database.connection';

async function bootStart() {
  const expressApp = Express();
  const PORT = process.env.PORT ?? 4030;

  expressApp.use(bodyParser.json());

  // Health check route
  expressApp.get('/health', (req: Request, res: Response) => {
    res.send('Health Check Success');
  });

  // Database connection
  await DatabaseConnection();

  // Books routes
  expressApp.use('/books', new BooksController().getBooksRouters());

  // Start the server
  expressApp.listen(PORT, () => {
    console.log(`Server Running on port -> ${PORT}`);
  });
}

bootStart();
