import Router from "./router";
import { GlobalStyle } from "./style/global";
import { useState } from "react";




function App() {
  
  const handleLogin = (username: string, password: string) => {
    console.log("Logging in with username:", username, "and password:", password);
  };
  return (
    <>
    <Router onLogin={handleLogin} />
    <GlobalStyle/>
    </>
  )
}

export default App