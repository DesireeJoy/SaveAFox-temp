  import bookList from '../../constants/bookList';
  import Book from '../Book/Book';
  import maxBooksRow from '../../constants/constants';
  import { Fade } from "react-awesome-reveal";
  import React from 'react';

  const bookLength = bookList.length;
function Books() {
    return (
<div className='books__container-inner'>
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
          
                
</div>
    )
}

export default Books;