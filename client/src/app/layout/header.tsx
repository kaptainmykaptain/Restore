import { AppBar, Toolbar, Typography } from "@mui/material";
import Switch from '@mui/material/Switch';

interface Props {
  darkmode: boolean;
  handleThemeChange: () => void;

}

export default function Headder ({darkmode, handleThemeChange}:Props) {
  return (
    <>
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
      <Switch checked={darkmode} onChange={handleThemeChange}/>
        <Typography  variant="h6">
          RE-STORE
        </Typography>
      </Toolbar>

    </AppBar>
    </>
  )
}