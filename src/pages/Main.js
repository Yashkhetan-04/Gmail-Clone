import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Emails from "../components/Emails";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const Main = () => {

    const [openDrawer, setopenDrawer] = useState(true);

    const toggleDrawer = () => {
        setopenDrawer(!openDrawer);
    }

    return (
        <>
            <Header toggleDrawer = {toggleDrawer}/>
            <Box>
                <Sidebar openDrawer={openDrawer}/>
                <Outlet context={{openDrawer}}/>
                {/* Outlet comprises of Emails.js and ViewEmails.js */}
            </Box>
            
            {/* <Emails openDrawer={openDrawer}/> */}
        </>

        
    )
}

export default Main;