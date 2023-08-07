import { Outlet } from "react-router-dom";
import Headder from "./header";
import  {CssBaseline, Container, createTheme, ThemeProvider}from '@mui/material';
import { useState } from "react";


function App() {
  const[darkmode, setDarkMode] = useState(false)
  const paletteType = darkmode? 'dark' :'light';
  const theme = createTheme({palette:{
    mode: paletteType, background:{default: paletteType === "light"? '#D3D3D3': "#121212"}
  }

  })

  function handleThemeChange () {
    setDarkMode(!darkmode)

  }
 
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
            <Headder darkmode={darkmode} handleThemeChange={handleThemeChange} ></Headder>
            <Container>
             
             <Outlet></Outlet>
            </Container>

        </ThemeProvider>
    
  );
}

export default App;
 