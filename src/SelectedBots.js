import React from "react";

const SelectedBots = ({ selectedBots, onRemove }) => (
  <div>
    <h2>Your Army</h2>
    <ul>
      {selectedBots.map((bot) => (
        <li key={bot.id}>
          <span>{bot.name}</span>
          <button onClick={() => onRemove(bot.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

export default SelectedBots;
