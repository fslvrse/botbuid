import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  const [army, setArmy] = useState([]);

  // Function to enlist a bot into the army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Function to release a bot from the army
  const releaseBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
      </header>
      <main>
        <BotCollection enlistBot={enlistBot} />
        <YourBotArmy army={army} releaseBot={releaseBot} />
      </main>
    </div>
  );
}

export default App;
