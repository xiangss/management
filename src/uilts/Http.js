import 'whatwg-fetch'

  export default class Http{

    static async get(url,data,header){

        let params = Object.entries(data).reduce((arr, [k, v]) => arr.concat(encodeURIComponent(k) + '=' + encodeURIComponent(v)), []).join('&')
        console.log(url+'?'+params);
        

        try{
            let response = await window.fetch(url+'?'+params,{
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Host": header
                }
            });
            let data = await response.json();
            console.log(data);
            
            return data
        } catch(error){
            throw new Error(error)
        }
    }

    static async post(url,data){
        try{
            let response = await fetch(url,{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    data
                })
            })

            return response;
        }catch(error){
            throw new Error(error)
        }
    }
  }