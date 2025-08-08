function BookCard({ book, index, link }) {
    return (
        <div key={index} className="flex flex-col items-center gap-4">
            <a href="read_more" className="hover:opacity-90 transition-opacity duration-300    ">
                <img
                    src={book.image}
                    alt={`${book.title} book cover`}
                    className="hover:opacity-90 shadow-md rounded-lg min-w-[120px] min-h-[180px] w-[160px] h-[220px] lg:w-[200px] lg:h-[300px] object-cover hover:scale-105 duration-300"
                />
            </a>

            <p className="text-center text-gray-700 text-sm sm:text-base">{book.genre}</p>
        </div>
    );
}

export default BookCard;