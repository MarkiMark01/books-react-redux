const filteredBooks = (books, textFilter, priceFilter) => {
    return books.filter((book) => {
        const numericPrice = parseFloat(book.price);
        return (
            book.title?.toLowerCase().includes(textFilter.toLowerCase()) &&
            (priceFilter === "All books" ||
                (priceFilter === "from $0 to $15" &&
                    numericPrice >= 0 &&
                    numericPrice <= 15) ||
                (priceFilter === "from $15 to $30" &&
                    numericPrice > 15 &&
                    numericPrice <= 30) ||
                (priceFilter === "more than $30" && numericPrice > 30))
        );
    });
};
