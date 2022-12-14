
import { ethers } from "ethers";
import BINOPTION from "../ABIs/BINOPTION.json";


export const Getprices = async () => {

    const provider = new ethers.providers.JsonRpcProvider(`https://rpc.ankr.com/eth_goerli`);
    const BOcontractaddr = "0x201aA3679D977b77FDCFe28748eA34d48555b892";

    const BOcontract = new ethers.Contract(BOcontractaddr, BINOPTION, provider);

    const pricesbignumber = await BOcontract.getprices();
    const prices = [
                    (pricesbignumber[0].toNumber() * 1e-8).toFixed(2) ,
                    (pricesbignumber[1].toNumber() * 1e-8).toFixed(2), 
                    (pricesbignumber[2].toNumber() * 1e-8)
                    ]
    console.log(prices);

    return prices;

}

// export const GetWBTCprice = async () => {
//     // const infurakey = process.env.INFURA_KEY;
//     const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"  // mainet
//     const WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" // mainet

//     const provider = new ethers.providers.JsonRpcProvider(`https://rpc.ankr.com/eth_goerli`);
//     const OffChainOracleAbi = '[{"inputs":[{"internalType":"contract MultiWrapper","name":"_multiWrapper","type":"address"},{"internalType":"contract IOracle[]","name":"existingOracles","type":"address[]"},{"internalType":"enum OffchainOracle.OracleType[]","name":"oracleTypes","type":"uint8[]"},{"internalType":"contract IERC20[]","name":"existingConnectors","type":"address[]"},{"internalType":"contract IERC20","name":"wBase","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"ConnectorAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"ConnectorRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract MultiWrapper","name":"multiWrapper","type":"address"}],"name":"MultiWrapperUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IOracle","name":"oracle","type":"address"},{"indexed":false,"internalType":"enum OffchainOracle.OracleType","name":"oracleType","type":"uint8"}],"name":"OracleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IOracle","name":"oracle","type":"address"},{"indexed":false,"internalType":"enum OffchainOracle.OracleType","name":"oracleType","type":"uint8"}],"name":"OracleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"addConnector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IOracle","name":"oracle","type":"address"},{"internalType":"enum OffchainOracle.OracleType","name":"oracleKind","type":"uint8"}],"name":"addOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"connectors","outputs":[{"internalType":"contract IERC20[]","name":"allConnectors","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"bool","name":"useWrappers","type":"bool"}],"name":"getRate","outputs":[{"internalType":"uint256","name":"weightedRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"bool","name":"useSrcWrappers","type":"bool"}],"name":"getRateToEth","outputs":[{"internalType":"uint256","name":"weightedRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiWrapper","outputs":[{"internalType":"contract MultiWrapper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracles","outputs":[{"internalType":"contract IOracle[]","name":"allOracles","type":"address[]"},{"internalType":"enum OffchainOracle.OracleType[]","name":"oracleTypes","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"removeConnector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IOracle","name":"oracle","type":"address"},{"internalType":"enum OffchainOracle.OracleType","name":"oracleKind","type":"uint8"}],"name":"removeOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract MultiWrapper","name":"_multiWrapper","type":"address"}],"name":"setMultiWrapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
//     const offChainOracleAddress = "0x07D91f5fb9Bf7798734C3f606dB065549F6893bb";

//     const oneINCHoracle = new ethers.Contract(offChainOracleAddress, OffChainOracleAbi, provider)


//     const WBTCDAI = await oneINCHoracle.getRate(WBTC,DAI,true);
//     const wbtcnum = ethers.utils.formatUnits(WBTCDAI,28)* 1e0 ;
     
//     console.log('WBTCDAI: ',(wbtcnum ) );

//     // const prices = {ethdai : ethnum , wbtcdai : wbtcnum};

//     return wbtcnum ; 


// }








// import  BTCABI  from "../ABIs/BTC_ABI.json";
// import  ETHABI  from "../ABIs/ETH_ABI.json";

// // DAI := 0x6B175474E89094C44Da98b954EedeAC495271d0F  mainet
// // WBTC := 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599 mainet



// // 0x0A2e8C1CBBC057f3f84380F3fAEFE9B6Dd537868
// export const Ethprice = async () => {


//     const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli")

//     const ETHaddr = "0xA1936b8b7292dAa7263D566646BB0F1a19969a4b"
//     const ETHpriceFeed = new ethers.Contract(ETHaddr, ETHABI, provider)

//     const ethprice = await ETHpriceFeed.getLatestPrice()

//     // console.log('ethprice: ', ethprice);
       
//   return ethprice ;
// }

// // 0xF2AD08c7e4f1E8400B99dB96C5B9e7944Ac3D681
// export const Btcprice = async () => {
    
//     const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli")

//     const BTCaddr = "0x55B39Eb1e175721DE7638CeaaA6b9ff03C9dFdb7"
//     const BTCpriceFeed = new ethers.Contract(BTCaddr, BTCABI, provider)

//     const btcprice = await BTCpriceFeed.getLatestPrice() ;
    
//         // let p = parseInt(btcprice._hex,16);
    
    
//     // console.log('btcprice: ', btcprice); 

//     return btcprice ; 
// }  

// const Web3 = require('web3');
// const { BigNumber } = require('ethers');

// const yourInfuraKey = 'add your key here';
// const web3 = new Web3(`https://mainnet.infura.io/v3/${yourInfuraKey}`);

// // eslint-disable-next-line max-len
// const OffChainOracleAbi = '[{"inputs":[{"internalType":"contract MultiWrapper","name":"_multiWrapper","type":"address"},{"internalType":"contract IOracle[]","name":"existingOracles","type":"address[]"},{"internalType":"enum OffchainOracle.OracleType[]","name":"oracleTypes","type":"uint8[]"},{"internalType":"contract IERC20[]","name":"existingConnectors","type":"address[]"},{"internalType":"contract IERC20","name":"wBase","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"ConnectorAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"ConnectorRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract MultiWrapper","name":"multiWrapper","type":"address"}],"name":"MultiWrapperUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IOracle","name":"oracle","type":"address"},{"indexed":false,"internalType":"enum OffchainOracle.OracleType","name":"oracleType","type":"uint8"}],"name":"OracleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IOracle","name":"oracle","type":"address"},{"indexed":false,"internalType":"enum OffchainOracle.OracleType","name":"oracleType","type":"uint8"}],"name":"OracleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"addConnector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IOracle","name":"oracle","type":"address"},{"internalType":"enum OffchainOracle.OracleType","name":"oracleKind","type":"uint8"}],"name":"addOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"connectors","outputs":[{"internalType":"contract IERC20[]","name":"allConnectors","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"bool","name":"useWrappers","type":"bool"}],"name":"getRate","outputs":[{"internalType":"uint256","name":"weightedRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"bool","name":"useSrcWrappers","type":"bool"}],"name":"getRateToEth","outputs":[{"internalType":"uint256","name":"weightedRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiWrapper","outputs":[{"internalType":"contract MultiWrapper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracles","outputs":[{"internalType":"contract IOracle[]","name":"allOracles","type":"address[]"},{"internalType":"enum OffchainOracle.OracleType[]","name":"oracleTypes","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"connector","type":"address"}],"name":"removeConnector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IOracle","name":"oracle","type":"address"},{"internalType":"enum OffchainOracle.OracleType","name":"oracleKind","type":"uint8"}],"name":"removeOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract MultiWrapper","name":"_multiWrapper","type":"address"}],"name":"setMultiWrapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// const offChainOracleAddress = '0x07D91f5fb9Bf7798734C3f606dB065549F6893bb';
// const offChainOracleContract = new web3.eth.Contract(JSON.parse(OffChainOracleAbi), offChainOracleAddress);

// const token = {
//     address: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
//     decimals: 6,
// };

// offChainOracleContract.methods.getRateToEth(
//     token.address, // source token
//     true, // use source wrappers
// ).call()
//     .then((rate) => {
//         const numerator = BigNumber.from(10).pow(token.decimals);
//         const denominator = BigNumber.from(10).pow(18); // eth decimals
//         const price = BigNumber.from(rate).mul(numerator).div(denominator);
//         console.log(price.toString()); // 472685293218315
//     })
//     .catch(console.log);






