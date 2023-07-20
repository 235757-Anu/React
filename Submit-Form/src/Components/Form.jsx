import React from 'react'
import './Form.css'

function Form(){

    const [formData,setFormData] = React.useState({
        'FirstName' : 'Mark',
        'LastName' : 'Otto',
        'UserName' : '',
        'City' : '',
        'State' : '',
        'Zip' : ''
    })

    function ValueChange(event) {
        const{name,value,type,checked} = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]:[value]
            }
        })
    }

    function submit(event){
        console.log(formData)
    }

    return(
        <div className="container card p-5">
        <div className="row">
            <div className="col-4">
                <div class="mb-3">
                    <label htmlFor="fname" className="form-label">First name</label>
                    <input type="text" name="FirstName" class="form-control" id="fname" value={formData.FirstName} onChange={ValueChange}/>
                </div>
            </div>
            <div className="col-4">
                <div class="mb-3">
                    <label htmlFor="lname" className="form-label">Last name</label>
                    <input type="text" name="LastName" class="form-control" id="lname" value={formData.LastName} onChange={ValueChange}/>
                </div>
            </div>
            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" name="UserName"id="uname" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={formData.UserName} onChange={ValueChange}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <div class="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" name="City" class="form-control" id="city" value={formData.City} onChange={ValueChange}/>
                </div>
            </div>
            <div className="col-3">
                <div className="mb-3">
                <label htmlFor="state" className="form-label">State</label>
                    <select class="form-select" name="State" id="state" aria-label="Default select example" value={formData.State} onChange={ValueChange}>
                        <option selected value="choose">Choose</option>
                        <option value="1">Kerala</option>
                        <option value="2">Tamil Nadu</option>
                        <option value="3">Karnataka</option>
                    </select>
                </div>
            </div>
            <div className="col-3">
            <div class="mb-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" name="Zip" class="form-control" id="zip" value={formData.Zip} onChange={ValueChange}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <button type="button" className="btn btn-primary" onClick={submit}>Submit form</button>
            </div>
        </div>
    </div>
    )
}
export default Form