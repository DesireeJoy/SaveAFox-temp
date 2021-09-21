
import React from 'react';
function Match() {
    return (
      <div>
  
          <div className="userBox">
            <ul className="listUL"> 
              <li className="gamesWonCont" id="gamesWonCont">
                Matches: <span className="gamesWon">0</span>
              </li>
              <div>
                <input type="button" onclick="window.location.reload();" defaultValue="Reset" className="resetGame" />
              </div>
            </ul></div>
          <ul className="grid">
          </ul>
          {/* Modal Window for Match */}
          <div className="modal">
            <div className="modal__space">
              <p>It's a match!</p>
              <img className="modal__pic" src />
              <input type="button" className="modal__link" defaultValue="Play Again" />
            </div>
          </div>
          {/* Template for Cards */}
          <template id="cardTemplate" />
        </div>
    );
  }




export default Match;