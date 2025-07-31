import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Search, Edit, Trash, Eye } from "lucide-react";
import Pagination from "../../../Component/Paginate";
import React, { useState, useEffect } from "react";

function Books({ auth, books: booksProp }) {
    const sampleBooks = [
        { id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        { id: 3, image: "https://example.com/book3.jpg", title: "Pride and Prejudice", category: "Romance", description: "A love story", status: "Active" },
        { id: 4, image: "https://example.com/book4.jpg", title: "Animal Farm", category: "Dystopian", description: "A satire", status: "Active" },{ id: 1, image: "https://example.com/book1.jpg", title: "The Great Gatsby", category: "Fiction", description: "A story of wealth", status: "Active" },
        { id: 2, image: "https://example.com/book2.jpg", title: "1984", category: "Dystopian", description: "A tale of control", status: "Active" },
        
    
    ];

    const isValidBook = (book) => {
        const isValidUrl = (url) => {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        };
        return (
            book.image &&
            isValidUrl(book.image) &&
            book.title &&
            book.title !== "" &&
            book.category &&
            book.category !== "" &&
            book.description &&
            book.description !== "" &&
            book.status &&
            book.status !== ""
        );
    };

    const [searchQuery, setSearchQuery] = useState("");
    const booksData = booksProp?.data || sampleBooks;
    const filteredBooks = booksData.filter(
        (book) =>
            isValidBook(book) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
             book.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const itemsPerPage = 4;
    const totalItems = filteredBooks.length;
    const lastPage = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(booksProp?.current_page || 1);

    useEffect(() => {
        if (currentPage > lastPage && lastPage > 0) {
            setCurrentPage(lastPage);
        }
    }, [currentPage, lastPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentBooks = filteredBooks.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= lastPage) {
            setCurrentPage(page);
            if (booksProp) {
                router.get(route("books.index"), { page }, { preserveState: true });
            }
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center dark:text-gray-200">
                    <Link href={route("books.index")}>
                        <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
                            Book
                        </h6>
                    </Link>
                </div>
            }
        >
            <Head title="Books" />

            <div className="flex flex-row gap-x-4 justify-between mb-4">
                <div className="flex gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                    />
                    <button type="button" className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded">
                        <Search className="w-4 h-4" />
                        Search
                    </button>
                </div>
                <Link href={route("books.create")} className="bg-blue-700 text-white px-4 py-2 rounded">
                    Add
                </Link>
            </div>

            <div className="flex flex-col dark:bg-gray-900">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table aria-label="Books table" className="min-w-full text-left text-sm font-light dark:bg-gray-800 dark:text-white">
                                <thead className="border-b bg-blue-500 text-white font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Image</th>
                                        <th scope="col" className="px-6 py-4">Title</th>
                                        <th scope="col" className="px-6 py-4">Category</th>
                                        <th scope="col" className="px-6 py-4">Description</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentBooks.length > 0 ? (
                                        currentBooks.map((book, index) => (
                                            <tr
                                                key={book.id}
                                                className="border-b dark:border-neutral-500 dark:text-white"
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {startIndex + index + 1}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <img
                                                        src={book.image}
                                                        alt={book.title}
                                                        className="w-10 h-10 object-cover"
                                                    />
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">{book.title}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{book.category}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{book.description}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{book.status}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Link
                                                            href={route("books.show", book.id)}
                                                            className="flex items-center px-3 py-1 bg-green-300 dark:text-black rounded"
                                                        >
                                                            <Eye className="w-4 h-4 text-green-900" />
                                                        </Link>
                                                        <Link
                                                            href={route("books.edit", book.id)}
                                                            className="flex items-center px-3 py-1 bg-blue-400 text-white rounded"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                if (confirm("Are you sure you want to delete this book?")) {
                                                                    router.delete(route("books.destroy", book.id));
                                                                }
                                                            }}
                                                            className="flex items-center px-3 py-1 bg-red-400 text-white rounded"
                                                        >
                                                            <Trash className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center py-4 dark:text-white">
                                                No valid books found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                onPageChange={handlePageChange}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
            />
        </AuthenticatedLayout>
    );
}

export default Books;