import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState();
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    axios
      .get(
        `https://api.coinstats.app/public/v1/coins?&currency=${currency}&skip=0`
      )
      .then((res) => {
        setListOfCoins(res.data.coins);
      });
  }, [searchWord, currency]);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord);
  });

  const currencyChange = () => {
    let x = document.querySelector("#mySelect").value;
    setCurrency(x);
  };
  return (
    <div className="App">
      <div className="cryptoHeader">
        <select onChange={currencyChange} id="mySelect" defaultValue="USD">
          <option value="SEK">SEK</option>
          <option value="EUR">EURO</option>
          <option value="USD">USD</option>
        </select>
        <input
          id="input"
          type="text"
          placeholder="Bitcoin"
          onChange={(e) => {
            setSearchWord(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <div key={coin.id}>
              <Coin
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                currency={currency}
                symbol={coin.symbol}
                id={coin.id}
                websiteUrl={coin.websiteUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
