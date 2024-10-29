/*
   Author: Jagadish Chakma
   Date: 10/19/24
   Description: this file use for axios api reuse across with porject
*/

/* ---------- NECESSARY MODULE IMPORT START ---------- */
import axios from "axios";
import {backend_link} from './link';
import getCookie from "./getCookie";
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
const authApi = axios.create({
    baseURL: backend_link,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${getCookie('authToken')}`
    }
})
/* ---------- AUTH API THAT REQUIRED AUTH CREDENTIAL END ---------- */





/* ---------- UPLOAD AUTH API START ---------- */
const uploadApi = axios.create({
    baseURL: backend_link,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${getCookie('authToken')}`
    }
})
/* ---------- UPLOAD AUTH API END ---------- */



export {api,authApi,uploadApi}