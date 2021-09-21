import React from 'react';
function DownloadLink(props) {

        return (
         <React.Fragment>
            <a href={props.src} className={props.className} download>{props.children}</a>
       </React.Fragment>
        )
    }

export default DownloadLink;