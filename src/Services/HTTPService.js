import axios from 'axios';
import {getTokenLocal } from '../Utils/Common';
const HTTPService = async (method,url,data,isFormData,isAuthorization) => {
  return  await axios({
      method,
      url,
      data,
      headers:authHeader(isFormData,isAuthorization)
    })
};
const authHeader=(isFormData,isAuthorization)=>{
    const token = getTokenLocal()
    if(isAuthorization){
        if(isFormData){
            return {'Content-Type': 'application/json','Authorization': 'Token '+ token,'content-type': 'multipart/form-data'}
        }else{
            return {'Content-Type': 'application/json','Authorization': 'Token '+ token}
        }
    }else{
        if(isFormData){
            return {'Content-Type': 'application/json','content-type': 'multipart/form-data'}
        }else{
            return {"Accept": "application/json", "Content-Type": "application/json" }
        }  
    }
}
export default HTTPService