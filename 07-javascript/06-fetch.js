const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  const response = fetch(url);
  if(!response.ok)
  {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const books = response.json();
  books.forEach((book,index) => {
    app.textContent = book.name;
  })
  return books;
};
fetchData();