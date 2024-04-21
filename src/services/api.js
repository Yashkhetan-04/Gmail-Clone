import fetch from "node-fetch";
const API_URL = 'http://127.0.0.1:8000'
const API_GMAIL = async (urlObject , payload , type) => {
    return await fetch(`${API_URL}/${urlObject.endpoint}/${type}`,{
        method: urlObject.method,
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export default API_GMAIL


// import axios from "axios";

// const API_URL = '"http://127.0.0.1:8000';

// const API_GMAIL = async (urlObject , payload , type) => {
//     return await axios({
//         method: urlObject.method,
//         url: `${API_URL}/${urlObject.endpoint}/${type}`,
//         data: payload,
//     })
// }

// export default API_GMAIL;







// Importing necessary modules or functions (e.g., fetch)
// Make sure 'fetch' is available in your environment or import it from a suitable library
// For example:
// import fetch from 'node-fetch';

// const API_URL = 'http://127.0.0.1:8000';

// // Async function to make HTTP requests to the API
// const API_GMAIL = async (urlObject, payload,type) => {
//     try {
//         const response = await fetch(`${API_URL}/${urlObject.endpoint}/${type}`, {
//             method: urlObject.method,
//             body: JSON.stringify(payload), // Sending the payload directly without wrapping
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             // Throw an error if the response status is not OK
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Return the response if successful
//         return response;
//     } catch (error) {
//         // Handle any errors that occur during the fetch operation
//         console.error('Error fetching data:', error.message);
//         throw error; // Rethrow the error to be handled by the caller
//     }
// };

// export default API_GMAIL;
