import coverOne from '../../images/Book1.jpg';
import coverTwo from '../../images/Book2GreatEscape.jpg';

function Book(props) {

return(

<div className="book">
    { props.bookImage === "Book1.jpg" ? <img src={coverOne} alt={props.bookAlt} 
     className="book__image"/> : <img src={coverTwo} alt={props.bookAlt} 
     className="book__image"/> } 
 
     <div className="book__info">
       <div className="book__subtitle">{props.bookSubtitle}</div>
       <div className="book__title"> {props.bookTitle} </div>
              <div className="book__contrib">Created by {props.bookContrib}</div>
            <a href={props.buyLink} className="book__buy book__buyItem">Purchase</a>  
     </div>

   </div>
)}
export default Book;