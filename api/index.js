import endpoint from '../config/enpoint'
import axios from 'axios'
export const getApiProduct = () => {
   return axios.get(`${endpoint.api_shop}/products`, {
       headers: {
        Accept: "application/json",
        Authorization: "Bearer 097a20ed1dd58152c5ee3c46d76f97307Q4xd9u2lxfamD+YeaHxApVrWXqCC+/YVJSY73bkPcIBcQi9PWOrnjA/tx6sESCl"
       }
   })
}