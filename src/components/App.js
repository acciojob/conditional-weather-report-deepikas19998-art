
import React, { useState } from "react";
import WeatherDisplay from "./weatherDisplay";

function App() {
  const [weather] = useState({ temperature: 25, conditions: "Sunny" });

  return (
    <div>
      <WeatherDisplay
        temperature={weather.temperature}
        conditions={weather.conditions}
      />
    </div>
  );
}

export default App;
