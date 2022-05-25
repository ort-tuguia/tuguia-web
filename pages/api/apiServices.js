import axios from 'axios'
const apiConnection = axios.create({
    baseURL : 'https://ort-tuguia-api.herokuapp.com/api',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getActivities(){
        return await apiConnection.get('/activities')
    },
    async postActivities(){
        return await apiConnection.post('/activities',{"name":"Paseo",})
    }
}