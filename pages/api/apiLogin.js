import apiConnection from "./apiConnection";

export default {
    async getLogin(User) {
        return await apiConnection.get('/user/login', {"userName": User.userName, "password": User.password})
    }
}