import Router from "./router";
import { GlobalStyle } from "./style/global";
import { useState } from "react";




function App() {
  
  const handleLogin = (username: string, password: string) => {
    
  };
  return (
    <>
    <Router onLogin={handleLogin} />
    <GlobalStyle/>
    </>
  )
}

export default App