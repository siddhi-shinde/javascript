const book={
  title: "Harry Potter and the Philosopher's Stone",
  Author: "J.K. Rowling",
  details: {
    pages:223,
    genre: "Fantasy"
  } 
};
for(key in book){
console.log(key+ ' :: '+book[key]);
}

console.log('-----------------------')

// Accessing the pages and genre properties
console.log(Object.entries(book.details));
