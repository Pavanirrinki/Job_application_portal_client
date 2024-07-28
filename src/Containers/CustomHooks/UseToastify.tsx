import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch =(url:any,method:any,body?:any) =>{
const [fetchresponse,setResponse] = useState<any>(null);
const [responseError,setResponseError] = useState<any>(null);
useEffect(() => {
    const source = axios.CancelToken.source();
    axios.request({
        url: url,
        method: method,
        data: body, 
        cancelToken: source.token,
    })
    .then(response => {
        setResponse(response.data);
    })
    .catch(error => {
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
        } else {
            setResponseError(error);
        }
    });
    
}, [url, method]);
  
return {
    fetchresponse,
    responseError
}
}

export default useFetch;