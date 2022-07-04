const booklist = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

addBook.addEventListener('click', function(){
	if (newTitle.value = "" && newAuthor.value == "") {
		alert("Enter any title and author of the book");
	} else {
		const li = document.createElement('li');

		const removeButton = document.createElement('button');
		

		
		const divAuthor = document.createElement('div');
		divAuthor.innerHTML = newAuthor.value;
		newTitle.value;
		
		removeButton.value;

		booklist.appendChild(li);

	}
})


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

//   // Add id and classes to the elements
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