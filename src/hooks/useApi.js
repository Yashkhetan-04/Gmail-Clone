import API from '../services/api';
import { useState } from 'react';

const useApi = (urlObject) => {

    const [response , setresponse] = useState(null);
    const [error , seterror] = useState("");
    const [isLoading , setisLoading]  = useState(false);

    const call =  async (payload , type = '') => {
        setresponse(null); // this function will repeatedly be called therefore value of previous response will be shared to current response if we will not put setresponse as null 
        setisLoading(true);
        seterror("");

        try{
            let res = await API(urlObject , payload , type);
            res = await res.json();
            setresponse(res);
        }
        catch(error){
            seterror(error.message);
        }
        
        finally{
            setisLoading(false);
        }

    }
    return {call , response , error , isLoading};
}
export default useApi;