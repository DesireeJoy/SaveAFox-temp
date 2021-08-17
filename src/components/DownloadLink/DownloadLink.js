
function DownloadLink(props) {

        return (
            <>
            <a href={props.src} className={props.className} download>{props.children}</a>
            </>
        )
    }

export default DownloadLink;