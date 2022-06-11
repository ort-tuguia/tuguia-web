import apiConnection from "./apiConnection";


export default {
    async getActivityById(id){
        return await apiConnection.get('/activities/'+id)
    },
    async updateActivity(id,name,description,locationLatitude,locationLongitude,price,guideUsername){
        return await apiConnection.put('/activities/'+id,{"name":name,"description":description,
            "locationLatitude":locationLatitude,"locationLongitude":locationLongitude,"price":price,
            "guideUsername":guideUsername
        })
    },
    async deleteActivity(id){
        return await apiConnection.delete('/activities/'+id)
    },
    async getActivities(token){
        return await apiConnection.get('/activities')
    },
    async createActivity(name,description,locationLatitude,locationLongitude,price,guideUsername){
        return await apiConnection.post('/activities',{"name":name,"description":description,
            "locationLatitude":locationLatitude,"locationLongitude":locationLongitude,"price":price,
            "guideUsername":guideUsername
        })
    },
    async getActivitiesByLocation(currentLatitude ,currentLongitude ,maxKm ){
        return await apiConnection.get('/activities/search/',{params:{"currentLatitude":currentLatitude,"currentLongitude":currentLongitude,"maxKm":maxKm}})
    }
}