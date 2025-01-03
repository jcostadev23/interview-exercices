/**
 Exercise: Organize Bookstore Data
Problem Statement:
You are building a feature for a bookstore app. The app receives raw data about books in this format:

const rawBooks = [
  "The Catcher in the Rye|J.D. Salinger|Fiction|10.99",
  "To Kill a Mockingbird|Harper Lee|Fiction|7.99",
  "A Brief History of Time|Stephen Hawking|Science|15.00",
  "The Great Gatsby|F. Scott Fitzgerald|Fiction|10.99",
  "The Art of Computer Programming|Donald Knuth|Technology|199.99",
  "Sapiens|Yuval Noah Harari|History|14.99"
];

Your task is to create a function that organizes this data into a clear and flexible structure that:
	1.	Groups books by genre.
	2.	Includes relevant details such as the number of books and their total price.
	3.	Is adaptable to future requirements like adding more details or group by other properties.

Deliverable:

Write a function organizeBookData(rawBooks) that returns the organized data. Keep it simple but open to extensions.

Let the developer think through the problem and choose a structure that balances current needs with potential future use cases.
 */

const rawBooks = [
  "The Catcher in the Rye|J.D. Salinger|Fiction|10.99",
  "To Kill a Mockingbird|Harper Lee|Fiction|7.99",
  "A Brief History of Time|Stephen Hawking|Science|15.00",
  "The Great Gatsby|F. Scott Fitzgerald|Fiction|10.99",
  "The Art of Computer Programming|Donald Knuth|Technology|199.99",
  "Sapiens|Yuval Noah Harari|History|14.99",
];

function organizeBookData(rawBooks) {
  const books = {};

  rawBooks.forEach((book) => {
    const [name, author, genre, price] = book.split("|");

    if (!books[genre]) {
      books[genre] = { books: [], totalPrice: 0, totalBooks: 0 };
    }

    books[genre].books.push({
      name,
      author,
      genre,
      price: parseFloat(price),
    });

    books[genre].totalPrice += parseFloat(price);
    books[genre].totalBooks += 1;
  });

  return books;
}

organizeBookData(rawBooks);

const organizeBookData2 = (rawBooks) => {
  return rawBooks.reduce((books, currentBook) => {
    const [name, author, genre, price] = currentBook.split("|");

    books[genre] ||= { books: [], totalBooks: 0, totalPrice: 0 };

    books[genre].books.push({ name, author, genre, price: parseFloat(price) });
    books[genre].totalBooks += 1;
    books[genre].totalPrice += parseFloat(price);

    return books;
  }, {});
};

organizeBookData2(rawBooks);
