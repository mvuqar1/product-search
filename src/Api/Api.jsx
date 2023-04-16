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


const getFormInputs = async () => {
  try {
    const response = await fetch("https://react-course-http-3769e-default-rtdb.firebaseio.com/form.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const addFormInputs = async (inputInformation) => {
    console.log(inputInformation)
    try {
      const response = await fetch("https://react-course-http-3769e-default-rtdb.firebaseio.com/form.json", {
        method: "POST",
        body: JSON.stringify(inputInformation),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFormInput = async (id) => {
    try {
      const response = await fetch(`https://react-course-http-3769e-default-rtdb.firebaseio.com/form/${id}.json`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting form input:', error);
    }
  };
  

  
  export{getAllApi,getIdApi,addFormInputs,getFormInputs,deleteFormInput};
  
  
