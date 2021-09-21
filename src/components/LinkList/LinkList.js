import React  from 'react';
import DownloadLink from '../DownloadLink/DownloadLink';
   function LinkList(props) {

  return (
    props.links.map((link, index) => (
    <DownloadLink
                 src={process.env.PUBLIC_URL + '/images/' +  link.link} className='fun__item-link'>{link.for} </DownloadLink>

    ))
  )
}

   export default LinkList