import apiConnection from "./apiConnection";
export default {
    async getCategories(token) {
        console.log("Token en apiCategories " + token)
        let response = await apiConnection.get('/categories', {
            headers: {
                Authorization: token ,
                Accept: 'application/json',
            }
        })
        return response
    },
    async createCategory(name,description, token) {
      return await apiConnection.post('/categories', {"name":name, "description":description}, {
            headers: {
                Authorization: token ,
                Accept: 'application/json',
            }
      })
    },
    async deleteCategory(id, token) {
        return await apiConnection.delete(`/categories/${id}`, {
            headers: {
                Authorization: token ,
                Accept: 'application/json',
            }
        })
    },
    async updateCategory(id,name,description, token) {
        return await apiConnection.put(`/categories/${id}`, {"name": name, "description": description}, {
            headers: {
                Authorization: token,
                Accept: 'application/json',
            }
        })
    }

}