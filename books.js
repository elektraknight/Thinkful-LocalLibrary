function findAuthorById(authors, id) {
    let authorInfo = authors.find((author) => (author.id === id));
    return authorInfo;
}
//pass
//================================================
function findBookById(books, id) {
    let bookInfo = books.find((book) => (book.id === id));
    return bookInfo;
}
//pass
//================================================
function partitionBooksByBorrowedStatus(books) {
    const borrowedArray = books.filter((book)=> !book.borrows[0].returned);
    const returnedArray = books.filter((book)=> book.borrows[0].returned);
    let partitionedArray = [borrowedArray, returnedArray];
    return partitionedArray;
}
//pass
//===============================================
function getBorrowersForBook(book, accounts) {
    let borrowers = [];
  accounts.map((account)=>{
   book.borrows.find((borrow)=>
   {
     if(borrow.id === account.id)
       {
          account["returned"] = borrow.returned
          borrowers.push(account)
       }
 
   })
   })
  return borrowers.splice(0, 10);
}
//pass
//=========================================
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
