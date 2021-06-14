import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import img from '../images/re.jpg'
import axios from 'axios'




 function Login(){
const history = useHistory()
const [email, setemail] = useState(null)
const [password, setpassword] = useState(null)

 


const onsubmit =(e)=>{
    e.preventDefault();
   console.log("email & password :: ",email, password); 
   if(email != password){
       alert("email and password does not match");
   }else{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      // handle success
      console.log(response);
      if(response.status == 200){
          history.push("/home");
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   }
};







    return (
    
<div className="container">
      <div className="row content">
        <div className="col-md-6 mb-3">
          <img src= { img } className="img-fluid" alt="image" />
        </div>
        
          <div className="col-md-3 mb-3">
          <h3 className="login-title">
              Sign In
              </h3>
          <form >

          <div className="form-group">
                <label for="email">
                    Email
                    </label>
                <input 
                onChange={(e)=> setemail(e.target.value)}
                type="email" 
                name="email" 
                id="email" 
                class="form-control" placeholder="joyce@dammie.com"
                 required />
                
              </div>


              <div className="form-group">
                <label for="password">
                    Password
                    </label>
                <input
                 onChange={(e)=> setpassword(e.target.value)}
                 type="password"
                  name="password" 
                  id="password" 
             
                class="form-control" placeholder="enter your passsword" 
                required />
             
              </div>

            <div className="remember-form-checkbox">
                <input 
                className="input-checkbox"
                id="ckb1"
                type="checkbox"
                name="Remember me"
                />
                <label className="label-checkbox" for="ckb1">Remember me</label>
            </div>
             <button onClick={onsubmit} className="btn btn-success">Sign In</button>

          </form>
          </div>
          </div>
          </div>
          







    
    );
}


export default Login