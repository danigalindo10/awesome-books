const booklist = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

addBook.addEventListener('click', function(){
	if (newTitle.value == "" && newAuthor.value == "") {
		alert("Enter any title and author of the book");
	}
     else 
          {
            // created new html elements for title, author and remove button"
            const div = document.createElement("div");
            const divTitle = document.createElement("div");
            const divAuthor = document.createElement("div");
            const removeButton = document.createElement("button");

            // Added the text "Remove Book" to show on the remove button
            removeButton.innerHTML += `Remove Book `;

            // Added  classes to the elements
            divTitle.classList.add("author");
            divAuthor.classList.add("title");
            removeButton.classList.add("remove");
            div.classList.add("book");

            //Add title and author to the created book container
            divTitle.innerHTML = newTitle.value;
            div.appendChild(divTitle);

            divAuthor.innerHTML = newAuthor.value;
            div.appendChild(divAuthor);

            //Add remove button to the created book container
            div.appendChild(removeButton);

            //Add the whole book container(div) to the booklist on html
            booklist.appendChild(div);
          }
})

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