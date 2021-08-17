
 import React, { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

 import Header from '../Header/Header';
 import Main from '../Main/Main';
 import Game from '../Match/Match.js';
import Footer from '../Footer/Footer';
 import downloadsList from '../../constants/downloadsList';

 import './App.css'; 

const downloadLength = downloadsList.length;
 function App() {

  const [Theme, setTheme] = useState('light');
  const [location, setLocation] = useState('home');
  const [downloadsShown, setDownloadsShown] = useState(3)
 
function handleShowMore(){
  setDownloadsShown(downloadsShown + 3);
}

  return (
   <>
    <div className="page">
   <Header />
  
    <Switch> 
          <Route exact path='/'>
            <Main
            theme={Theme}
            location={location}
            downloadsShown={downloadsShown}
            handleShowMore = {handleShowMore}
            downloadLength = {downloadLength}
            />
          </Route>
          {/* <Route path='/game'>
          <Game />
          </Route>  */}
        </Switch>
        </div>
  <Footer />
=
   </>
  );
}

export default App;