import axios from "axios";
import https from 'https';

const API_HOST = process.env.NEXT_PUBLIC_BACKEND_URL;
const getUrl = endpoint => `${API_HOST}/${endpoint}`;


const agent = new https.Agent({  
    rejectUnauthorized: false
});


export const rget = async (endpoint, jwt) => {
    const config = jwt
        ? {
            headers: { 'Authorization': `Bearer ${jwt}` },
            httpsAgent: agent
        }
        : {httpsAgent: agent};
    return await axios.get(getUrl(endpoint), config);
};

export const rpost = async (endpoint, data, jwt) => {
    const headers = jwt
        ? {headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${jwt}` }, httpsAgent: agent}
        : {headers: { "Content-Type": "application/json" }, httpsAgent: agent}
    ;
    return await axios.post(getUrl(endpoint), data, headers);
};


