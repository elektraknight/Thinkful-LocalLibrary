function findAccountById(accounts, id) {
    let user = accounts.find((account) => (account.id === id));
    return user;
}
//pass
//===============================================================
function sortAccountsByLastName(accounts) {
    let sortResults = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
    return sortResults;
}
//pass
//===============================================================
function getTotalNumberOfBorrows(account, books) {
    let user = account.id;
      let idOfBorrows = [];
      for (let i = 0; i < books.length; i++){
          const book = books[i].borrows;
          for (let j = 0; j < book.length; j++){
              let borrowId = book[j].id;
              idOfBorrows.push(borrowId);
          }
      }
    let idMatch = idOfBorrows.filter((matches) => matches === user);
    return idMatch.length;
}
//pass
//===============================================================
function getBooksPossessedByAccount(account, books, authors) {
    const books1 = books.filter((book)=>{
       const borrow = book.borrows[0];
       return !borrow.returned && borrow.id === account.id;
     })

 const allCurrentBorrows = books1.map((book)=>{
   const auth = authors.find((author) => author.id === book.authorId)
   console.log(auth)
   return {...book, author: auth}
 });
 return allCurrentBorrows;
}
//pass
//=====================================================
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
