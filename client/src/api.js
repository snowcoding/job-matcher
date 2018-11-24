/*!
 * Centralized API module.
 *
 * Usage:
 *
 * import API from "../api"
 *
 * API.endpoints.me()
 *   .then()
 *   .catch()
 */
import axios from 'axios'

let api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

// This adds the access token saved to the browser's local storage
if (localStorage.accessToken) {
  api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.accessToken}`
}

let authEndpoints = {
  // Todo: Add auth endpoints here
}

let profilesEndpoints = {
  random(userType){
    return api.get(`/${userType}s/random/`)
  },
  me () {
    return api.get('/me/')
  },
  // Todo: Add more profile endpoints
    signIn (data) {
      return api.post(`/token/`, data)
    },
}

let jobsEndpoints = {
  // Todo: Add jobs endpoints here
}

let billingEndpoints = {
  // Todo: Add billing endpoints here
}

let messagesEndpoints = {
  // Todo: Add messages endpoints here
}

api.endpoints = {
  ...authEndpoints,
  ...profilesEndpoints,
  ...jobsEndpoints,
  ...billingEndpoints,
  ...messagesEndpoints,
}

export default api