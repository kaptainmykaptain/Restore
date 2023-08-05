import Catalog from "../../features/catalog/Catalog";
import Headder from "./header";
import  {CssBaseline, Container, createTheme, ThemeProvider}from '@mui/material';
import { useState } from "react";


function App() {
  const[darkmode, setDarkMode] = useState(false)
  const paletteType = darkmode? 'dark' :'light';
  const theme = createTheme({palette:{
    mode: paletteType, background:{default: paletteType === "light"? '#808080': "#121212"}
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
             <Catalog></Catalog>

            </Container>

        </ThemeProvider>
    
  );
}

export default App;
 