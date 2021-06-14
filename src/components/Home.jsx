import React, {useEffect, useState } from "react";
import axios from "axios"





function Home(){
    const [data, setdata] = useState([]);
    useEffect(()=>{


        axios.get('https://jsonplaceholder.typicode.com/post')
        .then(function (response) {
          // handle success
          console.log(response);
          if(response.status === 200){
            setdata(response.data);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
        
    },[]);
    return(
    <div> We are home </div>
    
    
   
    )}



export default Home