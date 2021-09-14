
import DownloadLink from '../DownloadLink/DownloadLink';
import Reveal from "react-awesome-reveal";

function Press(props) {
  return (
    <div className='press' id='press'>
      <div className='press__heading'>Press Kit</div>
       <div className='press__content'>
         <div className='press__image'></div>
         
         <div className='press__info'>
           <p>The Save A Fox book series features Finnegan Fox and his friends from the SaveAFox rescue.</p>
            <p className='press__info-text'>
              This book was writtened by Mikayla Raines & Cassandra Severson, Illustrated by Cameo Anderson.</p>
        <DownloadLink
                 src={process.env.PUBLIC_URL + '/images/Downloads/pressKit.rar'} className='press__link'>Download Press Kit</DownloadLink>
           </div>



       </div>
     </div>
        )
}

export default Press;
