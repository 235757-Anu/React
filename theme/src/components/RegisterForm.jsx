import React from 'react'
import { ThemeContext } from './ThemeComponent';
const RegisterForm = ({data,save,submit}) => {
    const {bgColor,textColor,setBgColor,setTextColor} = React.useContext(ThemeContext);
  return (
    <div className={`container card shadow m-5 p-1 text-bg-${textColor}`}>
        <div className={`card shadow bg-${bgColor} p-5`}>
            <h1 className={`text-center mb-2> text-${textColor}`}>
                Register
            </h1>
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="fullName" className={`form-label text-${textColor}`}>FullName</label>
                    <input type="text" id="fullName" value={data.fullName} onChange={save} className="form-control" aria-labelledby="fullNameHelp" />
                    <div id="fullNameHelp" className={`form-text text-${textColor}`}>
                        Please provide your FullName.
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="email" className={`form-label text-${textColor}`}>Email-Id</label>
                    <input type="email" id="email" value={data.email} onChange={save} className="form-control" aria-labelledby="emailHelp" />
                    <div id="emailHelp" className={`form-text text-${textColor}`}>
                        Please provide a valid Email.
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="password" className={`form-label text-${textColor}`}>Password</label>
                    <input type="password" id="password" value={data.password} onChange={save} className="form-control" aria-labelledby="passwordHelp" />
                    <div id="passwordHelp" className={`form-text text-${textColor}`}>
                        Please provide a password with at least 8 character.
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={data.agree} onChange={save} id="agree"/>
                        <label className={`form-check-label text-${textColor}`} htmlFor="agree">
                            I agree to terms and conditions
                        </label>
                    </div>
                </div>
            </div>
            {
            data.agree&&
            <div className="row mb-4">
                <div className="col-12">
                    <button type="button" onClick={submit} className={`btn btn-primary text-${textColor}`}>Submit</button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}
export default RegisterForm