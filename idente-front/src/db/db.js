import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

async function api_SignIn(user) {
    const response = await axios.post(`${BASE_URL}/sign-in`, user)

    return response;
}

async function api_SignUp(register) {
    const response = await axios.post(`${BASE_URL}/sign-up`, register)

    return response;
}

async function api_GetToken(token) {
    const headers = {
        authorization: `Bearer ${token}`
    }

    const response = await axios.get(`${BASE_URL}/user`, {headers})

    return response;
}

export {
    api_SignIn,
    api_SignUp,
    api_GetToken,
}