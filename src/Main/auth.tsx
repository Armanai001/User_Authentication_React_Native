import axios from "axios";

const API_KEY = "FIREBASE-API-KEY"


async function createUser(email: string, password: string) {
    const BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`
    const URL = BASE_URL + API_KEY
    await axios.post(URL, {
        email, password, returnSecureToken: true
    })
}


export {createUser};