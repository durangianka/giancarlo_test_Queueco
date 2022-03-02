import { useEffect, useState } from "react";

const ws = new WebSocket("wss://api.gemini.com/v1/marketdata/BTCUSD?bids=true&offers=true");

function App() {

  const [bid, setBid] = useState({})
  const [ask, setAsk] = useState({})

  useEffect(() => {
    ws.addEventListener("message", (e) => {
      const data = JSON.parse(e.data)
      // data.events.map(event => {
      //   if (event.side === 'bid') {
      //     setBid(event);
      //   } else if (event.side === 'ask') {
      //     setAsk(event);
      //   }

      // })
      console.log(data)
    })
  }, []);


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-700 text-white">
      <div>
        {/* {bid &&
          (
            <p>{bid.side}</p>
          )
        }
      </div>
      <div>
        {ask &&
          (
            <p>{ask.side}</p>
          )
        } */}
      </div>
    </div >
  );
}

export default App;
