
import React from 'react';
import { Fade } from "react-awesome-reveal";

function Block(props) {
    const { heading, subheading, direction, ContentComponent, bg, navId } = props
    

  return (
    <section className={'block ' + navId}>
      <div className='block__heading'>{heading}</div>
     <p className='block__subheading'>{subheading}</p>
        <Fade cascade='true' damping = '.125' direction={direction}>
            <div class='block__cont'>
                  <div className={bg === 'bluebg' ? 'block__bg bluebg' : 'block__bg greenbg'}></div>
                {ContentComponent && <ContentComponent />}
                </div>

         </Fade>
    </section>
        )
}

export default Block;
