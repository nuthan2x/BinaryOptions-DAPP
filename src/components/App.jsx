import '../css/App.css';
import React, { useEffect, useState } from 'react';
import BetCard from './BetCard';
import Navbar from './Navbar';
import BasicTable from './txhistory';
import Footer from './footer';

function App() {

  const [ethchosen, setethchosen] = useState(true);
  const [CurrentAccount, setCurrentAccount] = useState(undefined);
  const [chainnetwork, setchainnetwork] = useState(undefined);

  useEffect(() => {
   ETHchosen();
  }, []);

  const ETHchosen = () => {
    setethchosen(true);
    
  }

  const WBTCchosen = () => {
    setethchosen(false);
    
  }

  

  return (
    <div className="App flex-wrapper">
      <header className="App-header">
      <Navbar setCurrentAccount={setCurrentAccount} setchainnetwork={setchainnetwork} chainnetwork={chainnetwork} CurrentAccount={CurrentAccount} />
      </header>

      <div className="Appbody">
       <div className="betcard">
         <div className="pairscontainer">
           <button className={ethchosen ? "ethbutton" : "no_ethbutton"} onClick={ETHchosen}>
             ETH
           </button>
           <button className={!ethchosen ? "btcbutton" : "no_btcbutton"} onClick={WBTCchosen} >
             WBTC
           </button>
         </div>
        
        
           
         <BetCard isETHchosen = {ethchosen} CurrentAccount= {CurrentAccount} />
          
       
        
       </div>
       { CurrentAccount && <div className="txhistory">
          <BasicTable CurrentAccount= {CurrentAccount}/>
        </div>}

      </div>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  )
}
export default App;