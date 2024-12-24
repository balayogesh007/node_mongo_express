import mongoose from "mongoose";

const BooksModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter title.']
    },
    author: {
        type: String,
        required: [true, 'Enter author.']
    },
    year: {
        type: Number,
        required: [true, 'Enter Year.']
    },
    createdAt: {
        type: Date,
        required: false,
        default: null
    },
    updatedAt: {
        type: Date,
        required: false,
        default: null
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null
    }
}, {timestamps: true})

const Book = mongoose.model('books', BooksModel);
export default Book;