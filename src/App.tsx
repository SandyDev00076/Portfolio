import React, { useState } from "react";
import Home from "components/Home";
import Portfolio from "components/Portfolio";

function App() {
  const [homeFlag, showHome] = useState(true);
  if (homeFlag) return <Home showHome={showHome} />;
  return <Portfolio />;
}

export default App;
