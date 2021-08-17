  import bookList from '../../constants/bookList';
  import Book from '../Book/Book';
  import maxBooksRow from '../../constants/constants'
  const bookLength = bookList.length;
function Books() {
    return (



<>
  
 <div className='books__heading'>Finnegan Fox Books</div>
  <div className='books__subheading'>The Finnegan fox adventures are always growing and introducing new members of the Save-A-Fox gang.</div>
<div className='books'><div className='books__cont'> 
  <div className='books__bg'></div>
   
                {bookList
                    .slice(0, bookLength >= maxBooksRow ? bookLength : maxBooksRow)
                .map((book, index) => (
                <Book
                    bookImage ={book.link}
                    bookTitle={book.title}
                    bookSubtitle={book.subtitle}
                    buyLink={book.buy}
                    bookAlt={book.alt}
                    bookContrib={book.author + " and " + book.illustrator}
                />
                ))}
                </div></div>
</>
    )
}

export default Books;