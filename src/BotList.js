import React from "react";

const BotList = ({ bots, onSelect }) => (
  <div>
    <h2>Available Bots</h2>
    <ul>
      {bots.map((bot) => (
        <li key={bot.id}>
          <span>{bot.name}</span>
          <button onClick={() => onSelect(bot)}>Select</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BotList;
