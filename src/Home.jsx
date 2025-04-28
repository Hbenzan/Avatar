import React, { use, useEffect, useState } from "react";
import axios from "axios";


const Home=()=>{
    const [Data,setData] = useState({
        name: '',
        Description: ''
    })
    useEffect(()=>{
     
axios.get('https://last-airbender-api.fly.dev/api/v1/characters')
        
        .then (res=>{

            //describing the company
            let personName = res.data[0].name;
            let companyDesc = "We help CEO's build their personal brand";
            setData({name:personName,Description:companyDesc})

            console.log("Response from api 1: ", res.data);
            console.log("Response from api 2: ", res.data[0]);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        //Printing out company info 
        <>
        <h1>{Data.name}</h1>
        <p>{Data.Description}</p>
        </>
    )
}
export default Home;

