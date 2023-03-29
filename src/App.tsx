import { ThemeProvider } from "styled-components";
import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";

import { defaultTheme } from './theme/default';
import { GlobalStyle } from "./theme/global";

function App() {


  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
    
  )
}

export {App} 
