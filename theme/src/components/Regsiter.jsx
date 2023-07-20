import React from 'react'
import RegisterForm from './RegisterForm'
import Notification from './Notification'
import axios from 'axios'
import { ThemeContext } from './ThemeComponent'

const Register = () => {
    const {textColor,setBgColor,setTextColor}=React.useContext(ThemeContext);
    const [formData,setFormData] = React.useState({
        'fullName':'',
        'email':'',
        'password':'',
        'agree':false
    });
    const [userCreate,setUserCreate] = React.useState(false)
    const saveData=(event)=>{
        const {type,id,checked,value} = event.target
        setFormData((prevData)=>{
            return{
                ...prevData,
                [id]:type==='checkbox'?checked:value
            }
        })
    }
    const submitted = ()=>{
        const payload={
            'fullName':formData.fullName,
            'email':formData.email,
            'password':formData.password
        }
        axios.post('http://localhost:3000/user',payload).then((response)=>{
            if(response.status===201){
                setUserCreate(true)
            }
        }).catch(error=>{
            setUserCreate(false)
        })
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column px-5 pt-2'>
        <div style={{'width':'100%'}} className='d-flex justify-content-end'>
            <input type="button" onClick={()=>{
                if(textColor==='dark'){
                    setBgColor('dark')
                    setTextColor('light')
                }
                else{
                    setBgColor('light')
                    setTextColor('dark')
                }
            }} value={'Change'} />
        </div>
        {
            userCreate?<Notification />:
            <RegisterForm
            data={formData}
            save={saveData}
            submit={submitted}
            />
        }
    </div>
  )
}
export default Register