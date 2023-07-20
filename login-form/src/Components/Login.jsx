import React from 'react'
import './Login.css'

function Login(){

    const [UserName,setUserName]=React.useState('')
    const [Password,setPassword]=React.useState('')
    const [formData,setFormData]=React.useState({
        'UserName': '',
        'Password': '',
        'robot':false,
        gender:'Female',
        'location':''
    })

    function login(event){
        console.log(formData.UserName)
        console.log(formData.Password)
        console.log('login')
    }

    function ValueChange(event){
        const {name,value,type,checked}=event.target
        setFormData(
            function(prevFormData){
                return{
                    ...prevFormData,
                    [name]: type==='checkbox' ? checked :value
                }
            }
        )
    }

    return(
        <div class='container'>
            <div class='heading'>
                <h2>Login Form</h2>
            </div>
    
             <div className="mb-3">
                 <label for="exampleInputUsername">User Name</label>
                 <input type="username" class="form-control" name='UserName' value={formData.UserName} id="exampleInputUsername" onChange={ValueChange} />
             </div>
             <div className="mb-3">
                 <label for="exampleInputPassword" class="form-label">Password</label>
                 <input type="password" class="form-control" name='Password' value={formData.Password} id="exampleInputPassword" onChange={ValueChange}/>
             </div>
             <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="Male"
                onChange={ValueChange} checked={formData.gender=== 'Male'}/>
                <label className="form-check-label" htmlFor="gender">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="Female"
                onChange={ValueChange} checked={formData.gender=== 'Female'}/>
                <label className="form-check-label" htmlFor="gender">
                    Female
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="">Select a location</label>
                <select class="form-select" aria-label="Default select example" name="location"
                onChange={ValueChange} value={formData.location}>
                    <option value="">Select an option</option>
                        <option value="1">Thrissur</option>
                        <option value="2">Ernakulam</option>
                        <option value="3">Trivandrum</option>
                        <option value="4">Kasargod</option>
                        <option value="5">Kollam</option>
                </select>
            </div>
             <div className="form-check p-2">
                <input className="form-check-input" type="checkbox" name="isRobot"
                checked={formData.isRobot} onChange={ValueChange}/>
                <label className="form-check-label" htmlFor="isRobot">
                    I am not a Robot
                </label>
            </div>
            {
                 formData.isRobot&&
             <button type="button" class="btn btn-primary" onClick={login}>Login</button>
                
            }
             <div className='p-2'>
                <div className="text-bold">{formData.UserName}</div>
                <div className="text-bold">{formData.Password}</div>
                <div className="text-bold">{formData.location}</div>
             </div>
        
        </div>
    )
}

export default Login
