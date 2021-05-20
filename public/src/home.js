function getTotalBooksCount(books) {
    let totalBooks = books.length;
    return totalBooks;
}
//pass
//======================================================
function getTotalAccountsCount(accounts) {
    let totalAccounts = accounts.length;
    return totalAccounts;
}
//pass
//======================================================
function getBooksBorrowedCount(books) {
    let borrowedArray = [];
      for (let i = 0; i < books.length; i++){
        if (books[i].borrows[0].returned === false){
            borrowedArray.push(books[i]);
        }
    }
  let allBorrowed = borrowedArray.length;
  return allBorrowed;
}
//pass
//======================================================
function getMostCommonGenres(books) {
    let result = [];
  const genreList = books.map((book) => book.genre);
  const accList = genreList.reduce((tally, genre) => {
    tally[genre] === undefined ? (tally[genre] = 1) : (tally[genre] += 1);
    return tally;
  }, {})

  for(genre2 in accList) {
    const num = accList[genre2];
    const consise = {"name": genre2, "count": num };
    result.push(consise);
  };
  return result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);

}
//pass
//======================================================
function getMostPopularBooks(books) {
    let result = [];
  
  books.forEach(book => {
    const num = book.borrows.length;
    const title = book.title;
    const consise = {"name": title, "count": num};
    result.push(consise);
  });
return result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}
//pass
//======================================================
function getMostPopularAuthors(books, authors) {
    let result = [];
  
    books.forEach(book => {
      const num = book.borrows.length;
      authors.forEach(author => {
        const first = author.name.first;
        const last = author.name.last;
        const full = `${first} ${last}`;
        
          if(author.id === book.authorId){
            const final = {"name": full, "count": num}
            result.push(final);
          }
        });
    });
    return result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}
//pass
//==============================================
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
