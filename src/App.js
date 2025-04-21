import React, { useState } from "react";
import "./App.css";
import BotList from "./components/BotList";
import SelectedBots from "./components/SelectedBots";
import BotDetails from "./components/BotDetails";

const App = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Bot A", health: 100, damage: 20 },
    { id: 2, name: "Bot B", health: 80, damage: 30 },
    { id: 3, name: "Bot C", health: 120, damage: 10 },
    // Add more bots as needed
  ]);
  const [selectedBots, setSelectedBots] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedBot, setSelectedBot] = useState(null);

  const handleSelectBot = (bot) => {
    setSelectedBots([...selectedBots, bot]);
    setSelectedBot(bot);
  };

  const handleRemoveBot = (id) => {
    setSelectedBots(selectedBots.filter((bot) => bot.id !== id));
  };

  const filteredBots = bots.filter((bot) =>
    bot.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Bot Battlr</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <BotList bots={filteredBots} onSelect={handleSelectBot} />
      <SelectedBots selectedBots={selectedBots} onRemove={handleRemoveBot} />
      {selectedBot && <BotDetails bot={selectedBot} />}
    </div>
  );
};

export default App;
