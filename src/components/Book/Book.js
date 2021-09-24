import coverOne from '../../images/Book1.jpg';
import coverTwo from '../../images/Book2GreatEscape.jpg';

import React from 'react';

//  //* Scroll Check *//

//     const scrollElements = document.querySelectorAll(".book__image");
//     const elementInView = (el, percentageScroll = 100) => {
//   const elementTop = el.getBoundingClientRect().top;
//  console.log(scrollElements + " are scroll elements");
//  console.log("Cat")
//   return (
//     elementTop <= 
//     ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
//   );
// };




function Book(props) {

return(

<div className="book">

    { props.bookImage === "Book1.jpg" ? <img src={coverOne} alt={props.bookAlt} 
     className="book__image"/> : <img src={coverTwo} alt={props.bookAlt} 
     className="book__image"/> } 
  
     <div className="book__info">
       <div className="book__info-cont">
          <div className="book__title"> {props.bookTitle} </div>
       <div className="book__subtitle">{props.bookSubtitle}</div>
      
              <div className="book__contrib"><i>Created by </i><br />{props.bookContrib}</div>
              </div>
            <a href={props.buyLink} className="book__buy book__buyItem">Purchase</a>  
     </div>

   </div>
)}
export default Book;