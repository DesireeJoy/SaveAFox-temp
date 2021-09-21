
 import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

 import Header from '../Header/Header';
 import Main from '../Main/Main';

  import Footer from '../Footer/Footer';
 import downloadsList from '../../constants/downloadsList';

 import './App.css'; 

const downloadLength = downloadsList.length;


 function App() {
  const [Theme, setTheme] = useState('light');
  const [downloadsShown, setDownloadsShown] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
 
  function handleShowMore(){
    setDownloadsShown(downloadsShown + 3);
    }

 React.useEffect(() => {
    const handleScreenSizeChange = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleScreenSizeChange);
    setIsMobile(screenWidth < 768);

    return () => window.removeEventListener("resize", handleScreenSizeChange);
  }, [screenWidth ]);

  function handleMobileClick() {

    setMobileNavOpen(true);
    console.log("Is open? " + isMobileNavOpen)
  }

function handleMobileClose() {
    setMobileNavOpen(false);
    }

   
  return (
<React.Fragment>
      <div className="page">
   <Header 
   isMobile={isMobile}
   mobileNavOpen={isMobileNavOpen}
   onHamburgerClick={handleMobileClick}
   handleMobileClose={handleMobileClose}
   />
  
    <Switch> 
          <Route >
            <Main
            theme={Theme}
            downloadsShown={downloadsShown}
            handleShowMore = {handleShowMore}
            downloadLength = {downloadLength}
            />
          </Route>

        </Switch>
     
  <Footer />

</div>
</React.Fragment>
  )
  }
export default App;