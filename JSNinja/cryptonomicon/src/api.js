/* eslint-disable prettier/prettier */
const API_KEY =
  "26a509a64cdd3533c818e19ff7be03d6df0479645c94471a7ce2d50653d8cd91";

const tickersHeandlers = new Map();
const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`);

const AGGRIGATR_INDEX = "5";

socket.addEventListener('message', e => {
  const {TYPE: type, FROMSYMBOL: currency, PRICE: newPrice} = JSON.parse(e.data);
  if(type !== AGGRIGATR_INDEX || newPrice === undefined) return;

  const heandlers = tickersHeandlers.get(currency) ?? [];
      heandlers.forEach(fn => fn(newPrice))

})

// TODO: 
/* 
  1. refactor to use URLSearchParams 
  2. Сделать так, чтоб тлько одна вкладка ходила за данными и делилась ими с другими вкладками. 
  Не внося изменения в файл api.js 
    - простой уровень сложности через LockalStorage
    - повышенный уровень сложности реализовать через Broadcast Channel 
*/


function sendToWebSocet(message){
  const strengifyedMessage = JSON.stringify(message)
 
  if(socket.readyState === socket.OPEN){
    socket.send(strengifyedMessage);
    return;
  };
  socket.addEventListener("open", () => {
    socket.send(strengifyedMessage);
  }, {once: true});
};

function subscribeToTickerOnWebSokcet(ticker){
  sendToWebSocet({
      "action": "SubAdd",
      "subs": [`5~CCCAGG~${ticker}~USD`]
    });
}

function unsubscribeFromTickerOnWebSocket(ticker){
  sendToWebSocet({
      "action": "SubRemove",
      "subs": [`5~CCCAGG~${ticker}~USD`]
    });
}


export const subscribeToTicker = (ticker, callBack) => {
  const subscribers = tickersHeandlers.get(ticker) || [];
  tickersHeandlers.set(ticker, [...subscribers, callBack]);
  subscribeToTickerOnWebSokcet(ticker);
};

export const unsubscribeFromTicker = (ticker) => {
  tickersHeandlers.delete(ticker);
  unsubscribeFromTickerOnWebSocket(ticker);
}