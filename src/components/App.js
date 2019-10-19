import React, { useState } from "react";
import Header from "./Header";
import DarkMode from "./DarkMode";

function App() {
  // defaults to light mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App${darkMode ? "_dark" : ""}`}>
    <Header />
      <h1>Welcome to Lambda School</h1>
      {/* we're getting values to darkmode via props */}
      <DarkMode value={darkMode} setValue={setDarkMode} />
    </div>
  );
}

export default App;
