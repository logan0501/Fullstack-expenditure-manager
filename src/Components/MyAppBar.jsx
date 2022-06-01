import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function MyAppBar() {
  const navigate = useNavigate();
  const logOut = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  navigate("/",{replace:true});
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#000000"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expenditure Manager
          </Typography>
          <Button color="inherit" onClick={()=>{logOut()}}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
