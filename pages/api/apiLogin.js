import apiConnection from "./apiConnection";

export default {
    async userLogin(username, password) {
        return await apiConnection.post('/user/login', {"username": username, "password": password})
    }
}