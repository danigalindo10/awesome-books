const booklist = document.getElementById('book-list');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const addBook = document.getElementById('add-book');

// Local Storage Section
if (!localStorage.getItem('bookInfo')) {
  localStorage.setItem('bookInfo', JSON.stringify([]));
}
let books;

function saveBooks(book) {
  localStorage.setItem('bookInfo', JSON.stringify(book));
}

/* eslint-disable no-use-before-define */

function displayBookData() {
  books = JSON.parse(localStorage.getItem('bookInfo'));
  updateUI();
}
displayBookData();

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  if (newTitle.value && newAuthor.value) {
    const obj = { title: newTitle.value, author: newAuthor.value };
    books.push(obj);
    saveBooks(books);
    displayBookData();
    newTitle.value = '';
    newAuthor.value = '';
  }
});

function updateUI() {
  booklist.innerHTML = '';
  books.forEach((data, index) => {
    const classBook = document.createElement('div');
    classBook.classList.add('class-book');

    const par = document.createElement('p');
    par.textContent = `${data.title} by ${data.author}`;

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';

    btnRemove.addEventListener('click', removeBook.bind(index));
    classBook.appendChild(par);

    classBook.appendChild(btnRemove);
    booklist.appendChild(classBook);
  });
}

function removeBook() {
  books.splice(this, 1);
  saveBooks(books);
  displayBookData();
}
