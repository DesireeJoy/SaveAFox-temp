
import DownloadLink from '../DownloadLink/DownloadLink';


function Press(props) {
  return (
    <div className='press' id='press'>
       <div className='press__content'>
         <div className='press__image'></div><div className='press__info'>
           <p>The Save A Fox book series features Finnegan Fox and his friends from the SaveAFox rescue and their adventures.
              This book was writtened by Mikayla Raines & Cassandra Severson.</p>
        <DownloadLink
                 src={process.env.PUBLIC_URL + '/press/pressKit.pdf'} className='press__link'>Download Press Kit</DownloadLink>
         
         

   
         
         
         
         
         </div>
       </div>
     </div>
        )
}

export default Press;
