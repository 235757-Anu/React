import React from 'react'
import './Crew.css'

function Crew(){

    const [formData,setFormData]=React.useState({
        FirstName:'',
        email:'',
        interest1: true,
        interest2: false,
        interest3: true
        
        
    })

    function subscribe(event){
        // console.log(formData.FirstName)
        // console.log(formData.email)
        console.log(formData)
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
        <form class="form"><br></br>
            <h1>Join the Happy Crew</h1>
            <h2>Get weekly ebike tips,news and discounts!</h2><br></br>
            <div >
                <label for="name"  class="form-group"><b>First Name</b><span class="red">*</span></label>
                <input type="text"  name="FirstName" class="form-input" id="name"  value={formData.FirstName} onChange={ValueChange}/>
            </div>
            <div>
                <label for="mail" class="form-group"><b>Email</b><span class="red">*</span></label>
                <input type="email" required name="email" class="form-input" id="mail" value={formData.email} onChange={ValueChange} />
            </div>
            <div class="form-group">
                <label for="interest"><b>What are you interested in?</b></label><br></br>
                <input type="checkbox" name="interest1" id="interest1"  checked={formData.interest1} onChange={ValueChange} />Cargo<br></br>
                <input type="checkbox" name="interest2"  id="interest2" checked={formData.interest2} onChange={ValueChange} />Commuter<br></br>
                <input type="checkbox" name="interest3"  id="interest3"  checked={formData.interest3} onChange={ValueChange} />Touring
            </div>
            <button type="button"  onClick={subscribe}>Subscribe</button>
            <hr></hr>
        </form>
        </div>
    )
}
export default Crew