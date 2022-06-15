import apiConnection from "./apiConnection";

export default {
    async getUsuarios(token) {
        console.log("Token en apiUsuarios " + token)
         let response = await apiConnection.get('/users', {
            Authorization: token,
            Accept: 'application/json'
        })

        return response
    }
}