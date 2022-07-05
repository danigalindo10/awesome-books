const booklist = document.getElementById('book-list');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const addBook = document.getElementById('add-book');

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
    par.textContent = `${data.title} By ${data.author}`;

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
// addBook.addEventListener('click', function(){
// 	if (newTitle.value == "" && newAuthor.value == "") {
// 		alert("Enter any title and author of the book");
// 	}
//      else 
//           {
//             // created new html elements for title, author and remove button"
//             const div = document.createElement("div");
//             const divTitle = document.createElement("div");
//             const divAuthor = document.createElement("div");
//             const removeButton = document.createElement("button");

//             // Added the text "Remove Book" to show on the remove button
//             removeButton.innerHTML += `Remove Book `;

//             // Added  classes to the elements
//             divTitle.classList.add("author");
//             divAuthor.classList.add("title");
//             removeButton.classList.add("remove");
//             div.classList.add("book");

//             //Add title and author to the created book container
//             divTitle.innerHTML = newTitle.value;
//             div.appendChild(divTitle);

//             divAuthor.innerHTML = newAuthor.value;
//             div.appendChild(divAuthor);

//             //Add remove button to the created book container
//             div.appendChild(removeButton);

//             //Add the whole book container(div) to the booklist on html
//             booklist.appendChild(div);
//           }
// })


// // .................Preserving data using local storage........
// const newbookform = document.getElementById("new-book");

// // Adding listner for event handling
// newbookform.addEventListener("input", () => {
//   localStorage.setItem("title", `${newTitle.value}`);
//   localStorage.setItem("author", `${newAuthor.value}`);
// });

// // get values from local storage
// newTitle.value = localStorage.getItem("title");
// newAuthor.value = localStorage.getItem("author");


//removeButton.value;
//const removeButton = document.createElement('button');
// const booklist = document.getElementById('book-list');
// const addBook = document.getElementById('add-book');
// const newTitle = document.getElementById('new-title');
// const newAuthor = document.getElementById('new-author');

// let bookData = [];

// class Book {
//   constructor(title = 'Harry Potter', author = 'JK Rowling', id){
//     this.title = title;
//     this.author = author;
//     this.id = id;
//   }
// }

// // Function to Add New Book to the collection
// function getBookInfo(title, author, id) {
//   const divAuthor = document.createElement('div');
//   const divTitle = document.createElement('div');
//   const removeButton = document.createElement('button');
//   const li = document.createElement('li');

  // Add id and classes to the elements
//   divTitle.classList.add('author');
//   divAuthor.classList.add('title');
//   removeButton.classList.add('remove');
//   removeButton.setAttribute('id', `button${id}`);
//   removeButton.setAttribute('onclick', `javascript:removeListElement(${id})`);
//   li.classList.add('book');
//   li.setAttribute('id', `book${id}`);

//   // Add content to elements
//   divTitle.innerHTML = title;
//   divAuthor.innerHTML = author;
//   removeButton.innerText = 'Remove';
//   removeButton.type = 'button';

//   // Add eventlistener

// }