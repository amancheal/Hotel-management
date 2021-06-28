import React, {useEffect, useState } from "react";
import axios from "axios"
import img1 from '../images/recep1.jpg'
import img2 from '../images/buying.jpg'
import img3 from '../images/food.jpg'
import img4 from '../images/accounting.jpg'
import img5 from '../images/sales.jpg'
import img6 from '../images/human.jpg'
import img7 from '../images/cleaning.jpg'
import img8 from '../images/it.jpg'






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
            <div  className="card inner-box m-3">
           <img src= { img1 } onClick={onsubmit} alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Front Office</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { img2 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Purchasing</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { img3 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Food Production</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card w-100 inner-box m-3">
            <img src= { img4 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Accounting</h5>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card inner-box m-3">
            <img src= { img5 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Sales</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { img6 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Human Resource</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card inner-box m-3">
            <img src= { img7 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">House Keeping</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div className="card w-100 inner-box m-3">
            <img src= { img8 }  alt="Card" />
                <div className="card-body">
                <h5 className="card-title">Information Technology</h5>
                </div>
            </div>
        </div>

    </div>
</div>

        
       
    )}



export default Dashboard