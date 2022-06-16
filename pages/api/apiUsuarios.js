import apiConnection from "./apiConnection";

export default {
    async getUsuarios(token) {
        console.log("Token en apiUsuarios " + token)
         let response = await apiConnection.get('/users', {
             headers: {
                 Authorization: token ,
                 Accept: 'application/json',
             }
        })

        return response
    },
    async deleteUsuarios(username, token) {
        console.log("Token en deleteUsuarios " + token)
        console.log("Username en deleteUsuarios " + username)
        let response = await apiConnection.delete(`/users/${username}`, {
            headers: {
                Authorization: token ,
                Accept: 'application/json',
            }
        })
        return response
    }
}