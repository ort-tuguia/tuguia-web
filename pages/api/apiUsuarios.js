import apiConnection from "./apiConnection";

export default {
    async getUsuarios() {
        return await apiConnection.get('/users')
    }
}