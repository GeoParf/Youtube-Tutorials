/* eslint-disable prettier/prettier */
const API_KEY =
  "26a509a64cdd3533c818e19ff7be03d6df0479645c94471a7ce2d50653d8cd91";

const tickersHeandlers = new Map();

// TODO: refactor to use URLSearchParams 
// eslint-disable-next-line

const loadTickers = () =>{
if(tickersHeandlers.size === 0){
  return
}

  fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${[...tickersHeandlers.keys()].join(",")}&tsyms=USD&api_key=${API_KEY}`
  ).then((r) => r.json()).then(rowData => {
      const updatedPrices = Object.fromEntries(
      Object.entries(rowData).map(([key, value]) => [key, value.USD])
    )
    Object.entries(updatedPrices).forEach(([currency, newPrice]) => {
      const heandlers = tickersHeandlers.get(currency) ?? [];
      heandlers.forEach(fn => fn(newPrice))
    })
  });
};

export const subscribeToTicker = (ticker, callBack) => {
  const subscribers = tickersHeandlers.get(ticker) || [];
  tickersHeandlers.set(ticker, [...subscribers, callBack])
};

export const unsubscribeFromTicker = (ticker) => {
  tickersHeandlers.delete(ticker);
}

setInterval(loadTickers, 5000);

window.tickers = tickersHeandlers
