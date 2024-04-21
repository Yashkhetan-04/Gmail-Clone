import { Box , Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError(); //help to show which error is coming , this will help developer to debug the error.
    console.log(error);
    return(
        <Box style={{marginLeft: 250}}>
            <Typography> 
                There is an error loading this page.
            </Typography>
        </Box>
    )
}

export default ErrorComponent