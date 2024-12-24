import Book from "./book.schema";
import { CreateBookInput } from "./books.interface";

export class BooksService {
  async createNewBook(createBook:  CreateBookInput) {
    try {
      const book = await Book.create(createBook);
      return book;
    } catch (error) {
      console.error("Failed to create book", error);
      throw new Error("Failed to create book");
    }
  }

  async getBookById(id: string) {
    try {
      const book = await Book.findById(id);
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    } catch (error) {
      console.error("Failed to get book by ID", error);
      throw new Error("Failed to get book by ID");
    }
  }

  async updateBookById(id: string, updateData: any) {
    try {
      const book = await Book.findByIdAndUpdate(id, updateData, { new: true });
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    } catch (error) {
      console.error("Failed to update book by ID", error);
      throw new Error("Failed to update book by ID");
    }
  }

  async deleteBookById(id: string) {
    try {
      const result = await Book.findByIdAndDelete(id);
      if (!result) {
        throw new Error("Book not found");
      }
      return { message: "Book deleted successfully" };
    } catch (error) {
      console.error("Failed to delete book by ID", error);
      throw new Error("Failed to delete book by ID");
    }
  }

  async getAllBooks() {
    try {
      const books = await Book.find();
      return books;
    } catch (error) {
      console.error("Failed to get all books", error);
      throw new Error("Failed to get all books");
    }
  }
}
