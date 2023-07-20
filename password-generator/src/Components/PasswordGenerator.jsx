import React from 'react'
import './PasswordGenerator.css'

function PasswordGenerator(){

    const [Password,setPassword]=React.useState('')

    const array=[6,7,8]
    const value=Math.floor(Math.random()*3)
    const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCase='abcdefghijklmnopqrstuvwxyz'
    const numbers='1234567890'
    const specialCase='~!@#$%^&*'
    const args=[upperCase,lowerCase,specialCase,numbers]

    function getrandomChar(argument){
        return argument[Math.floor(Math.random()*argument.length)];
    }

    function Generator(){
        let pass=''
        pass=pass+getrandomChar(upperCase[Math.floor(Math.random()*args.length)]);
        pass=pass+getrandomChar(lowerCase[Math.floor(Math.random()*args.length)]);
        pass=pass+getrandomChar(numbers[Math.floor(Math.random()*args.length)]);
        pass=pass+getrandomChar(specialCase[Math.floor(Math.random()*args.length)]);
        for(let i=0;i<array[value]-4;i++){
            pass=pass+getrandomChar(args[Math.floor(Math.random()*args.length)]);
        }
        setPassword(pass);
    }

    return(
        <div class='container'>
            <div class='heading'>
                <h1>Password Generator</h1>
            </div>
            <div class='password'>
                <h2>{Password}</h2>
            </div>
            <div class='sub'>
                <button onClick={Generator}>Generate</button>
            </div>
        </div>
    )
}

export default PasswordGenerator