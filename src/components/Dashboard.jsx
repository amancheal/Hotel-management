import React, {useEffect, useState } from "react";
import axios from "axios"
import images from '../images/rece.jpg'






function Dashboard(){
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

    <div >
      <h3>Bechael Hotels Dashboad</h3>
      
  <div id="row1-cards" className="row mx-5 mt-3 row-cols-1 row-cols-md-2 row-cols-lg-4">

        <div className="col">
            <div className="card inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Front Office</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Purchasing</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Food Production</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card w-100 inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Accounting</h5>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Sales</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Human Resource</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">House Keeping</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card w-100 inner-box m-3">
            <img src= { images }  alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Information Technology</h5>
                </div>
            </div>
        </div>

    </div>
</div>

        
       
    )}



export default Dashboard