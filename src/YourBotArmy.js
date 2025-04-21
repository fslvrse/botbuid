import React from "react";

const YourBotArmy = ({ army, releaseBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;

