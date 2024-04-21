
import { Photo , StarOutline , SendOutlined, InsertDriveFileOutlined , DeleteOutline , MailOutline } from "@mui/icons-material";

export const sideBar_data = [
    {
        name:"inbox",
        title:"Inbox",
        link:'/',
        icon:Photo
    },
    {
        name:"starred",
        title:"Starred",
        link:'/starred',
        icon:StarOutline
    },
    {
        name:"sent",
        title:"Sent",
        link:'/sent',
        icon:SendOutlined
    },
    {
        name:"drafts",
        title:"Drafts",
        link:'/draft',
        icon:InsertDriveFileOutlined
    },
    {
        name:"bin",
        title:"Bin",
        link:'/bin',
        icon:DeleteOutline
    },
    {
        name:"allmail",
        title:"All mail",
        link:'/allmail',
        icon:MailOutline
    },
];