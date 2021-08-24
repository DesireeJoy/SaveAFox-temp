
import Match from '../Match/Match'
  import downloadsList from '../../constants/downloadsList';
  import LinkList from '../LinkList/LinkList';

function Fun(props) {


  return (
    
    <div className='fun' id='fun'>
      
      <div className='fun__heading'>Finnegan Fun!</div>
     <p className='fun__subheading'>There are many different shapes and sizes when it comes to mobile device screen size. We can't provide all of them. So we've done our best to average android and iphone screen sizes and size our images based on that information.</p>
      <div className='fun__container'>
         <div className='fun__bg'></div>
        <div className='fun__download'>
        {downloadsList
                    .slice(0,props.downloadsShown)
                .map((item, index) => (
               <div className='fun__item'><img className='fun__item-image'alt={item.alt} src={process.env.PUBLIC_URL + '/images/' + item.image}/>
                 <p className='fun__item-title'>{item.description}</p>
                 <div className='fun__item-linkBox'>
          <span>Download for</span>
    <LinkList links = {item.links}/>
           
      </div>
                
            
                
                 
                 </div>
      
                ))}
             
                </div>
                    {props.downloadsShown < props.downloadLength && (
                        <button className='downloads__button' onClick={props.handleShowMore}>Show more</button>
                       )} 
      </div>

     </div>
        )
}

export default Fun;
