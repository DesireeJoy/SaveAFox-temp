
import React from 'react';
  import downloadsList from '../../constants/downloadsList';
  import LinkList from '../LinkList/LinkList';
    import { Fade } from "react-awesome-reveal";

function Fun(props) {


  return (
    
    <React.Fragment> 
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
 



 </React.Fragment>
        )
}

export default Fun;
