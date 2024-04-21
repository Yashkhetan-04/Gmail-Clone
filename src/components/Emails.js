import React from "react";
import { useOutletContext , useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from '../hooks/useApi'
import { useEffect  , useState} from "react";
import { Checkbox , Box , List , ListItem, Divider} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constants/constant";

const Emails = () => {

    const {openDrawer} = useOutletContext();

    const {type} = useParams();

    const [selectedEmails , setSelectedEmails] = useState([]);

    const getEmailServices = useApi(API_URLS.getEmailFromType);

    const moveEmailsToBinServices = useApi(API_URLS.moveEmailsToBin);

    const [refreshScreen , setRefreshScreen] = useState(false);

    const [changeChecked , setchangeChecked] = useState(false);

    const deleteEmailServices = useApi(API_URLS.deleteEmail);
    

    useEffect(()=>{
        getEmailServices.call({} , type);
    },[type , refreshScreen])

    const selectedAllEmails = (e) =>{
        setchangeChecked(!changeChecked);
        if(e.target.checked){
            const emails = getEmailServices?.response.map(email => email._id);
            setSelectedEmails(emails);
        }
        else{
            setSelectedEmails([]);
        }
    }

    const deleteSelectedEmails = (e) => {
        if(type==='bin'){
            deleteEmailServices.call(selectedEmails);
        }else{
            moveEmailsToBinServices.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState);
        // checked=false;
        setchangeChecked(false);
    }

    return (
        <Box
            style={openDrawer?{marginLeft: 250 , width: 'calc(100% - 250px)'}: {width: '100%'}}
        >

            {/* <div>heell from email</div> */}
            <Box style={{padding: '20px 10px 0 10px' , display: 'flex' , alignItems: 'center'}}>
                <Checkbox size="small" onChange={(e)=>selectedAllEmails(e)} checked={changeChecked}/>
                <DeleteOutline onClick={(e)=> deleteSelectedEmails(e)} style={{cursor:'pointer'}} />
            </Box>
            <List>
                {
                //    getEmailServices && getEmailServices.response.map(email=> (
                //         <Email/>
                //    ))
                        // BOTH THE STATEMENTS ARE SAME.

                        getEmailServices?.response?.map(email=> (
                            <Email key={email._id} email={email} selectedEmails = {selectedEmails} setRefreshScreen={setRefreshScreen} setSelectedEmails={setSelectedEmails}/>
                        ))


                }
            </List>
            {
                getEmailServices?.response?.length === 0 && 
                <NoMails message={EMPTY_TABS[type]}/>
            }
        </Box>


    )
}
export default Emails;