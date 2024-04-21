
import { Box, Typography, Checkbox, styled, Divider } from "@mui/material"
import { Star, StarBorder } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import {routes} from '../routes/routes'
import useApi from "../hooks/useApi"
import { API_URLS } from "../services/api.urls"


const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    // background: '#f2f6fc',
    cursor: 'pointer',
    display : 'flex',
    alignItems: 'center',
    // border:'0.2px solid #fdfdfd',
    '&: hover':{
        background:'#f2f6fc',
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    '&>div':{
        display:'flex',
        width: '100%',
        '&>p':{
            fontSize: 14
        }
    }
})

const Indicator = styled(Typography)({
    fontSize: '12px  !important',
    background: '#ddd',
    color:'#222',
    padding: '0 4px',
    borderRadius: 4,
    marginRight: 6,
})

const Date = styled(Typography)({
    marginLeft:'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5f6368',
    fontWeight: 700,
})

const MidData = styled(Box)({
    display:'flex',
})

const TextData = styled(Typography)({
    height: 20,
    width: 700,
    overflow:'hidden',
})

const Email = ({ email , selectedEmails , setRefreshScreen , setSelectedEmails}) => {

    const navigate = useNavigate();

    const toggleStarredServices = useApi(API_URLS.toggleStarredEmails);

    const toggleStarredMails = () => {
        toggleStarredServices.call({id:email._id , value: !email.starred});
        setRefreshScreen(prevState=>!prevState);
    }

    const onValueChange = () => {
        if(selectedEmails.includes(email._id)){
            setSelectedEmails(prevState=> prevState.filter(id=>id!=email._id))
            // removing this email from checkbox
        }else{
            setSelectedEmails(prevState=> [...prevState , email._id]);
            // inserting this email in checkbox
        }
    }
 
    return (
        <>
        <Wrapper>
            <Checkbox size="small"  checked={selectedEmails.includes(email._id)} onChange={()=>onValueChange()}/>

            {
                email.starred ? 
                <Star fontSize="small" style={{marginRight: 10 , color:'#fff200'}} onClick={()=>toggleStarredMails()} /> 
                :
                <StarBorder fontSize="small" style={{marginRight: 10}} onClick={()=>toggleStarredMails()} />
            }

            
            <Box onClick={() => navigate(routes.view.path , {state: {email: email}})}> 
            {/* through second argument of navigate we are passing particular email which we want to open in viewEmail */}

                <Typography style={{width: 200 , height: 20 , overflow: 'hidden' , fontWeight: 700}}>{email.name}</Typography>
                <Indicator>Inbox</Indicator>
                {/* <MidData>
                    <Typography style={{ fontWeight: 700, marginRight:5, height: 20 , width:200 , overflow:'hidden'}}>{email.subject}</Typography>
                    <TextData >{email.body && '-'} {email.body}</TextData>
                </MidData> */}
                <TextData><strong>{email.subject?.slice(0,35)}... </strong>{email.body && '-'}  {email.body?.slice(0,35)}...</TextData>
                
                <Date>
                    {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })} &nbsp;
                    {(new window.Date(email.date)).getDate()}
                </Date>
            </Box>
        </Wrapper>
            <Divider/>
            </>
    )
}

export default Email