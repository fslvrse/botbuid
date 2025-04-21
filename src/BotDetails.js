import React from "react";

const BotDetails = ({ bot }) => (
  <div>
    <h3>{bot.name}</h3>
    <p>Health: {bot.health}</p>
    <p>Damage: {bot.damage}</p>
    {/* Add more details as needed */}
  </div>
);

export default BotDetails;

