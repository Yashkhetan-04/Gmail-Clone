import { Box , Button , styled , List , ListItem} from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import React from "react";
import { sideBar_data } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useParams , NavLink } from "react-router-dom";
import {routes} from '../routes/routes'

const ComposeButton = styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:17,
    borderRadius:16,
    display:'flex',
    justifyContent:'space-between',
    minWidth:140,
    textTransform:'none',
    fontWeight:550,
    paddingRight:20,
    marginLeft:10,
    '&: hover':{
       background:'#c2e7ff',
       boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
})

const Container = styled(Box)({
    padding:8,
    paddingLeft:0,
    '&>ul':{
        padding:'10px 0 0 0',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer',
        '& > a':{
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    '&>ul>a>li>svg':{
        paddingLeft:15,
        marginRight:20 
    },
    '&>ul>li: hover':{
        background:'#c4c7c5',
        borderRadius:"0px 25px 25px 0"
    }
})

// const listeditems = styled(ListItem)({
//     // '&: hover':{
//     //     background:black,
//     // }
// })

const SidebarContent = () => {

    const [openDialog , setopenDialog] = useState(false);
    const { type } = useParams();

    const toggleMailSection = () => {
        setopenDialog(true);
    }

    return(
        <Container>
            <ComposeButton onClick={toggleMailSection}> <CreateOutlined/> Compose</ComposeButton>
            <List>
                {
                    sideBar_data.map(data=>(
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={type===data.name.toLowerCase() ?
                             {background:'#d3e3fd' , borderRadius:"0px 25px 25px 0"}: {}}>
                                <data.icon fontSize="small" /> {data.title}
                            </ListItem>
                        </NavLink>

                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setopenDialog={setopenDialog}/>
        </Container>
    )
}
export default SidebarContent; 