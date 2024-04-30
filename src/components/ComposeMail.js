import React from "react";
import { Dialog , Box  , Typography , styled , InputBase , TextField , Button} from "@mui/material";
import { Close  , DeleteOutline} from "@mui/icons-material";
import { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth:'100%',
    maxHeight :'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0', 
}

const Header = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    cursor:'pointer',
    '& > p':{
        fontSize:14,
        fontWeight:500,
    }
})

const RecipientWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding:'0 15px',
    '& > div':{
        fontSize:14,
        borderBottom: '1px solid #F5F5F5',
        marginTop:10
    }
})

const Footer = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center',
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:18,
    width:100,
    '&: hover':{
        background:'#105dd7'
    }
})


const ComposeMail = ({openDialog , setopenDialog}) => {
    
    const [data , setdata] = useState({});
    const sentEmailServices = useApi(API_URLS.saveSentEmail);
    const saveDraftServices = useApi(API_URLS.saveDraftEmails);
    
    const config = {
        Host : "smtp.elasticemail.com",
        Username : process.env.REACT_APP_USERNAME,
        Password : process.env.REACT_APP_PASSWORD,
        Port:2525,
    }
    
    const SendMail = (e) => {
        e.preventDefault();
        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : "yashkhetan44@gmail.com",
                Subject : data.subject,
                Body : data.body,
            }).then(
                message => alert(message)
                );
            }
            
        const payload = {
            to: data.to,
            from: "yashkhetan44@gmail.com",
            subject:data.subject,
            body: data.body,
            date: new Date(),
            image:"",
            name: 'Yash Khetan',
            starred: false,
            type: 'sent',
        }
        
        sentEmailServices.call(payload);
        
        if(!sentEmailServices.error){
            setopenDialog(false);
            setdata({});
        }
        else{
            
        }
        setopenDialog(false);
    }

    const CloseMail = (e) => {
        e.preventDefault();
        const payload = {
            to: data.to,
            from: "yashkhetan44@gmail.com",
            subject:data.subject,
            body: data.body,
            date: new Date(),
            image:"",
            name: 'Yash Khetan',
            starred: false,
            type: 'drafts',
        }
        
        saveDraftServices.call(payload);
        
        if(!saveDraftServices.error){
            setopenDialog(false);
            setdata({});
        }
        else{
            
        }
        setopenDialog(false);
    }

    


    const ChangeValue = (e) => {
        setdata({...data , [e.target.name]: e.target.value});
    }

    return(
        <Dialog
            open={openDialog}
            PaperProps={{sx: dialogStyle}}
        >
            <Header onClick={(e) => CloseMail(e)}>
                <Typography>New Message</Typography>
                <Close fontSize="small"  onClick={CloseMail}/>
            </Header>
            <RecipientWrapper>
                <InputBase  placeholder="Recipients"  name="to" onChange={(e) => ChangeValue(e)}/>
                <InputBase placeholder="Subject" name="subject" onChange={(e) => ChangeValue(e)}/>
            </RecipientWrapper>
            <TextField 
                multiline
                rows={14.5}
                sx={{'& .MuiOutlinedInput-notchedOutline ': {border:'none'}}}
                onChange={(e) => ChangeValue(e)}
                name="body"
            />
            <Footer>
                <SendButton  onClick={(e) => SendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={()=>setopenDialog(false)} style={{cursor:'pointer'}}/>
            </Footer>
            
        </Dialog>
    )
}
export default ComposeMail