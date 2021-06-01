async function filterBookObjects(filter) {
  // fetch the url using the await keyword so execution pauses until the
  // Promise returned by fetch resolves to an actual Response object.
  const url = `http://openlibrary.org/search.json?q=computing+${filter}`;
  // await the results
  const bookCollection = await fetch(url);
  // return the result of the response.json() method, which is also a promise
  return bookCollection.json();
}
let currentPage = 1;
let booksPerPage = 10;
let slicedbookArray;
let setTotalPages;
async function getBookArraySlice(bookCollection) {
  //returns the array of docs, sliced
  const slicedbookArray = bookCollection.docs.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage);
  console.log("getBookArraySlice : " + slicedbookArray);
  return slicedbookArray;
}

bookSearchButton.addEventListener('click', ev => {
  findBooks();
});

function buildBookArticle(book) {
  const bookArticle = document.createElement("article");
  const bookTitle = document.createElement("h2");
  const bookAuthorLabel = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookIsbnLabel = document.createElement("h3");
  const bookIsbn = document.createElement("p");
  const yearPublishedLabel = document.createElement("h3");
  const yearFirstPublished = document.createElement("p");
  const bookCover = document.createElement("img");
  const largeCover = document.createElement('div');
  // incase no Title in database
  if (book.title_suggest) {
    bookTitle.textContent = book.title_suggest;
  } else {
    bookTitle.textContent = "no book title found";
  }
  bookAuthorLabel.textContent = "The Author:"
  // incase the Autor is not in database
  if (book.author_name) {
    bookAuthor.textContent = book.author_name[0];
  } else {
    bookAuthor.textContent = "no author name found";
  }
  bookIsbnLabel.textContent = "ISBN No:"
  // incase the ISBN is not in database
  if (book.isbn) {
    bookIsbn.textContent = book.isbn[0];
  } else {
    bookIsbn.textContent = "no isbn found";
  }
  yearPublishedLabel.textContent = "Year first Published:"
  // incase the ISBN is not in database
  if (book.first_publish_year) {
    yearFirstPublished.textContent = book.first_publish_year;
  } else {
    yearFirstPublished = "no year found";
  }
  // let testISBN = "9780385533225";
  // incase the ISBN is not in database
  if (book.isbn) {
    // get the book cover
    bookCover.src = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
    bookCover.alt = `book cover for ${book.title}`;
    largeCover.src = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`;
    largeCover.alt = `book cover for ${book.title}`;
  }
  // check there is an image otherwise use icon
  if (bookCover.complete && bookCover.naturalHeight == 0) {
    //source: https://www.iconfinder.com/icons/285636/book_icon
    bookCover.src = "images/nobookicon.png";
  }
  // check there is an image otherwise use icon
  if (largeCover.complete && largeCover.naturalHeight == 0) {
    //source: https://www.iconfinder.com/icons/285636/book_icon
    largeCover.src = "images/nobookicon.png";
  }
  bookArticle.appendChild(bookCover);
  bookArticle.appendChild(largeCover);
  bookArticle.appendChild(bookTitle);
  bookArticle.appendChild(bookAuthorLabel);
  bookArticle.appendChild(bookAuthor);
  bookArticle.appendChild(bookIsbnLabel);
  bookArticle.appendChild(bookIsbn);
  bookArticle.appendChild(yearPublishedLabel);
  bookArticle.appendChild(yearFirstPublished);
  return bookArticle;
}
async function findBooks() {
  clearResults()
  screenLoader.classList.add("waiting");
  const filteredBooks = await filterBookObjects(bookSearchFilter.value);
  console.log(filteredBooks.docs);
  console.log(filteredBooks.docs.length);
  const bookArraySlice = await getBookArraySlice(filteredBooks);
  console.log(bookArraySlice);
  setTotalPages = Math.ceil(filteredBooks.docs.length / booksPerPage);
  totalPages.textContent = setTotalPages;
  console.log(totalPages.textContent);
  const bookArticles = bookArraySlice.map(buildBookArticle);
  console.log(bookArticles);
  bookArticles.forEach(book => bookDisplay.appendChild(book));
  bookPageIndicator.textContent = currentPage;
  screenLoader.classList.remove("waiting");
}
// clear the appended child elements from the results list.
function clearResults() {
  while (bookDisplay.firstChild) {
    bookDisplay.firstChild.remove();
  }
}
// scrolling through the pages
function nextBookPage() {
  // go up a page
  currentPage += 1;
  // loop back to first page when currentPage exceeds the number of pages
  if (currentPage > setTotalPages) {
    currentPage = 1;
  }
  findBooks();
}

function prevBookPage() {
  // go down a page
  currentPage -= 1;
  // loop back to last page when currentPage less than 0
  if (currentPage < 1) {
    currentPage = setTotalPages;
  }
  findBooks();
}
// need to add an event listner on buttons that call the methods
nextBookPageButton.addEventListener('click', nextBookPage);
prevBookPageButton.addEventListener('click', prevBookPage);

bookSearchFilter.addEventListener('keydown', ev => {
  if (ev.key == "Enter") {
    bookSearchButton.click();
  }
});
