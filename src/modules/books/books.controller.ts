import { Router, Request, Response } from "express";
import { BooksService } from "./books.service";

export class BooksController {
  private readonly route: Router;
  private readonly booksService: BooksService;

  constructor() {
    this.route = Router();
    this.booksService = new BooksService();
    this.BookRoutePath();
  }

  private BookRoutePath() {
    this.route.post("/create", this.createNewBook);
    this.route.get("/:id", this.getBookById);
    this.route.put("/:id", this.updateBookById);
    this.route.get("/allbooks", this.getAllBooks);
    this.route.delete("/:id", this.deleteBookById);
  }

  private async createNewBook(req: Request, res: Response) {
    try {
      const createBook = await this.booksService.createNewBook(req?.body);
      if (createBook) {
        res.status(201).json({ message: "Book created Successfully." });
      } else {
        res.status(400).json({ message: "Failed to create book" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  private async getBookById(req: Request, res: Response) {
    try {
      const book = await this.booksService.getBookById(req.params.id);
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  private async updateBookById(req: Request, res: Response) {
    try {
      const updatedBook = await this.booksService.updateBookById(
        req.params.id,
        req.body
      );
      if (updatedBook) {
        res.status(200).json({ message: "Book updated successfully" });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  private async deleteBookById(req: Request, res: Response) {
    try {
      const deletedBook = await this.booksService.deleteBookById(req.params.id);
      if (deletedBook) {
        res.status(200).json({ message: "Book deleted successfully" });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  private async getAllBooks(req: Request, res: Response) {
    try {
      const books = await this.booksService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  public getBooksRouters() {
    return this.route;
  }
}
