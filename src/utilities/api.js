

/* ---------- NECESSARY MODULE IMPORT START ---------- */
import axios from "axios";
import { backend_link } from './link';
import Cookies from "js-cookie";
/* ---------- NECESSARY MODULE IMPORT END ---------- */



/* ---------- NORMAL API THAT NOT REQUIRED AUTH CREDENTIAL START ---------- */
const api = axios.create({
    baseURL: backend_link,
    headers: {
        'Content-Type': 'application/json',
    }
})
/* ---------- NORMAL API THAT NOT REQUIRED AUTH CREDENTIAL END ---------- */






/* ---------- AUTH API THAT REQUIRED AUTH CREDENTIAL START ---------- */
const authApi = () => {
    let token = Cookies.get('authToken');
    console.log("token", token);
    return axios.create({
        baseURL: backend_link,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    })
}
/* ---------- AUTH API THAT REQUIRED AUTH CREDENTIAL END ---------- */





/* ---------- UPLOAD AUTH API START ---------- */
const uploadApi = axios.create({
    baseURL: backend_link,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${Cookies.get('authToken')}`
    }
})
/* ---------- UPLOAD AUTH API END ---------- */



export { api, authApi, uploadApi }