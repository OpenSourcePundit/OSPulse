import React, { useState } from "react";
import { orange } from "../../constants/color";
import {
  Typography,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SearchDialogue from "../specific/Search";
const Header = () => {

  const navigate = useNavigate()
  const [isMobile,setIsMobile] = useState(false)
  const [isSearch,setIsSearch] = useState(false)
  const [isNewGroup,setIsNewGroup] = useState(false)
  const [isNotification,setIsNotification] = useState(false)



  const handleMobile = () => {
   setIsMobile(prev=>!prev)
  };
  const openSearch = () => {
    setIsSearch(prev=>!prev)
  };
  const openNewGroup = () => {
    setIsNewGroup(prev=>!prev)
  };
  const navigateToGroup = () => navigate('/Groups')

  const LogoutHandler =() =>{
    setIsMobile(prev=>!prev)
  }
  const openNotifications =() =>{
    setIsNotification(prev=>!prev)
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              color="initial"
            >
              OS-Pulse
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearch}  />
              <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup}  />

              <IconBtn title={"Manage Groups"} icon={ <GroupIcon />} onClick={navigateToGroup}  />
              <IconBtn title={"Notifications"} icon={ <NotificationsIcon />} onClick={openNotifications}  />

              <IconBtn title={"Logout"} icon={ <LogoutIcon />} onClick={LogoutHandler}  />
          
            </Box>


          </Toolbar>
        </AppBar>
      </Box>
      {
        isSearch &&(
          <SearchDialogue/>
        )
      }



    </>
  );
};

const IconBtn = ({title,icon,onClick}) =>{
  return(
    <Tooltip title={title}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={onClick}
                >
                  {icon}
                </IconButton>
              </Tooltip>

  )
}


export default Header;
