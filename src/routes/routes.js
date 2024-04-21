import Main from "../pages/Main";
import Emails from "../components/Emails";
import ViewEmail from "../components/ViewEmail";
const routes = {
    main:{
        path:'/',
        element: Main,
    },
    emails:{
        path: '/emails',
        element: Emails,
    },
    invalid: { // if there are any invalid routing, i.e any routes have not matched
        path: '/*',
        element: Emails,
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

export {routes};