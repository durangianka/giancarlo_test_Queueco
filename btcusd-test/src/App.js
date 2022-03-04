import { useEffect, useState } from "react";

const ws = new WebSocket("wss://api.gemini.com/v1/marketdata/BTCUSD?bids=true&offers=true");

function App() {

  const [bid, setBid] = useState([{}])
  const [ask, setAsk] = useState([{}])

  useEffect(() => {
    ws.addEventListener("message", (e) => {
      const data = JSON.parse(e.data)
      if (data.type === "update") {
        data.events.map(event => {
          if (event.side === 'bid') {
            setBid(btc => [...btc, event])
          } else if (event.side === 'ask') {
            setAsk(ask => [...ask, event])
          }
        })
      }
      console.log(data)
    })
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-700 text-white">
      {bid[1] &&
        (
          <>
            <div>
              <p>{bid[bid.length - 1].price} {bid[bid.length - 1].remaining} - {ask[ask.length - 1].price} {ask[ask.length - 1].remaining}</p>
            </div>
            <div>
              <p>{bid[bid.length - 2].price} {bid[bid.length - 2].remaining} - {ask[ask.length - 2].price} {ask[ask.length - 2].remaining}</p>
            </div>
          </>
        )
      }
    </div >
  );
}

export default App;
