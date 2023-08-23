import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <div className="app">
          <Sidebar isSidebar={isSidebar}  />  
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            
            <Outlet/>
          </main>
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;

