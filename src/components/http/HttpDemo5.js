import axios from 'axios';
import React from 'react'

export default function HttpDemo5() {
    
    async function fetchDatas(){
        try{
            const userNames = ['defunkt','evanphx','Bharat123456789','sanjaysamantra1'];

            let promiseArr = userNames.map(userName=>{
                return axios.get(`https://api.github.com/users/${userName}`)
            })
            const [response1,response2,response3,response4] = await axios.all([promiseArr]);

        } catch(err){
            console.log('Something went wrong...',err);
        }

    }

    useEffect(()=>{
        fetchDatas()
    },[]);
 
 
    return (
        <>
            <div>Fetch data from Multiple APIs using axios.all()</div>
        </>
  )
}
