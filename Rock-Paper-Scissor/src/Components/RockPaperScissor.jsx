import React from 'react'
import './RockPaperScissor.css'

function RockPaperScissor(){
    const[UserScore,SetUserScore]=React.useState(0)
    const[NoResult,SetNoResult]=React.useState(0)
    const[ComputerScore,SetComputerScore]=React.useState(0)
    const[Message,SetMessage]=React.useState(0);

    function ComputerChoice(){
        const Options=['R','P','S']
        const choice=Math.floor(Math.random()*3)
        return Options[choice]
    }

    function Play(UserChoice){
        const machineChoice=ComputerChoice();
        const Result=UserChoice+machineChoice;
        
        switch(Result){
            case 'RS':
            case 'PR':
            case 'SP':
                SetUserScore(UserScore+1);
                SetMessage("User Won");
                break;
            case 'SR':
            case 'RP':
            case 'PS':
                SetComputerScore(ComputerScore+1);
                SetMessage("Computer Won");
                break;
            default:
                SetNoResult(NoResult+1);
                SetMessage("It's a Draw");
                break;
        }
    }

    return(
        <div class='container'>
            <div class="Heading">
                <h1>Rock Paper Scissors </h1>
            </div>
        <div className="images">
          <button onClick={()=>Play('R')}><img src="src\assets\icon-rock.svg"/></button>
          <button onClick={()=>Play('P')}><img src="src\assets\icon-paper.svg"/></button>
          <button onClick={()=>Play('S')}><img src="src\assets\icon-scissors.svg"/></button>
        </div>
        <div className="points">
            <div classname="user">
                <h3>User</h3>
                <h3>{UserScore}</h3>
            </div>
            <div classname="noresult">
                <h3>Draw</h3>
                <h3>{NoResult}</h3>
            </div>
            <div classname="computer">
                <h3>Computer</h3>
                <h3>{ComputerScore}</h3>
            </div>
         </div>
         <div class='wins'>
             <h2>{Message}</h2>
         </div>
        </div>
    )
}
export default RockPaperScissor