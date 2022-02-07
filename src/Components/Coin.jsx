function Coin(props) {
  const { name, icon, price, symbol, currency, websiteUrl } = props;

  return (
    <div className="coin">
      <h1>Name: {name} </h1>
      <img src={icon} alt="icon" />
      <h3>
        Price: {price} {currency}
      </h3>
      <h3>Symbol: {symbol}</h3>
      <h4>
        <a target="_blank" href={websiteUrl}>
          {websiteUrl}
        </a>
      </h4>
    </div>
  );
}

export default Coin;
