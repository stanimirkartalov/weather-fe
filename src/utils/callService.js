import axios from 'axios';
export async function callService(method, url, data){
  const response = await axios({
        method,
        url,
        data,
    })

    return response.data;
}