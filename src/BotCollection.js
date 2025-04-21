import React, { useEffect, useState } from "react";

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id} onClick={() => enlistBot(bot)}>
          <h2>{bot.name}</h2>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
