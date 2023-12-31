import { ShoppingCart } from "@mui/icons-material";
import { AppBar, ListItem, Toolbar, Typography, Switch, List, IconButton, Badge, Box } from "@mui/material";

import { NavLink } from "react-router-dom";

const midLinks = [
  {title: 'catalog',path:'/catalog'},
  {title: 'contact',path:'/contact'},
  {title: 'about',path:'/about'}
]

const rightLinks = [
  {title: 'login',path:'/login'},
  {title: 'register',path:'/register'}
]

const navStyles = {color:'inherit', typography:'h6', textDecoration:'none' ,"&:hover" : {
  color:'grey.500'
}, "&.active":{
  color:'text.secondary', border:'ActiveBorder'
}
}


interface Props {
  darkmode: boolean;
  handleThemeChange: () => void;

}

export default function Headder ({darkmode, handleThemeChange}:Props) {
  return (
    <>
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
        <Box display="flex" alignItems="center">
          <Switch checked={darkmode} onChange={handleThemeChange}/>
          <Typography component={NavLink} to="/" sx={navStyles}  >
              RE-STORE
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <List  sx={{display:'flex'}}>
            {midLinks.map(({title, path}) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{mr:2}}>
            <Badge badgeContent="4">
              <ShoppingCart> </ShoppingCart>
            </Badge>
          </IconButton>
          <List sx={{display:'flex'}}>
            {rightLinks.map(({title, path})=>(
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  )
}