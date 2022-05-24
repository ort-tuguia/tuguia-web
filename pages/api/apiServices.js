import axios from 'axios'
const apiConnection = axios.create({
    baseURL : 'https://ort-tuguia-api.herokuapp.com/api/',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getActivities(){
        const activities = await apiConnection.get('activities')
        // console.log (`Actividades dentro de Api: ${activities}`)
        return activities
    }

}