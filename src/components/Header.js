import React from "react";
import { AppBar , Toolbar , styled , InputBase , Box} from "@mui/material";
import { Menu  , Search , Tune , HelpOutlineOutlined ,SettingsOutlined , AppsOutlined , AccountCircleOutlined} from "@mui/icons-material";
import { GmailLogo } from "../constants/constant"; 

const StyledAppbar = styled(AppBar)({
    position:'sticky',
    background: '#F5F5F5',
    boxShadow: 'none',
})
 
const SearchWrapper = styled(Box)({
    // background:'#EAF1FB',
    background:'#e8f0fb',
    marginLeft: 80,
    borderRadius:30,
    minWidth:690,
    maxWidth:720,
    height: 48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px',
    }
})

const OptionsWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg': {
        marginLeft:20
    }
})

const Header = ({toggleDrawer}) => {
    return(
        <StyledAppbar>
            <Toolbar>
                <Menu color="action" onClick={toggleDrawer}/>
                <img src={GmailLogo} alt="Logo" style={{width: 115 , marginLeft: 15}}/>
                <SearchWrapper>
                    <Search color="action"/>
                    <InputBase placeholder="Search mail"/>
                    <Tune color="action"/>
                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutlineOutlined color="action"/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color="action"/>
                    <AccountCircleOutlined color="action"/>
                </OptionsWrapper>
            </Toolbar>
        </StyledAppbar>
    )
}
export default Header