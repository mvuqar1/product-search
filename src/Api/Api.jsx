import{API_URL} from "./confiq"

const getAllApi=async ()=>{
    try {
        const response=await fetch(API_URL);
    return await response.json();
    } catch (error) {
        console.log(error)
    }   
}
const getIdApi=async (apiId)=>{
    try {
        const response=await fetch(`${API_URL}/${apiId}`);
    return await response.json();
    } catch (error) {
        console.log(error) 
    }
}
  
  export{getAllApi,getIdApi};
  
  
