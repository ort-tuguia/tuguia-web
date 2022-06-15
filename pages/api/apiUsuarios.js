import apiConnection from "./apiConnection";

export default {
    async getUsuarios(token) {
        console.log("Token en apiUsuarios " + token)
         let response = await apiConnection.get('/users',{
            headers:{
                'authorization': token
            }
        })

        return response
    }
}