import axios from "axios"
import { parseCookies } from "nookies"

export function getApiClient(context?: any) {
  const { 'nextauth.token':token } = parseCookies(context)


 const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use(config => {
  console.log(config)

  return config
})

if(token){
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

return api
}