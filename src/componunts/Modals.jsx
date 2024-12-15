import { useEffect } from "react";
import { resetGame } from "./cats";

const LevelModal = ({setLevel,setStartGame}) => {
    window.onload = ()=>{
    document.querySelector('.level-modal').showModal();
    }
    function levelValue(){
        const levelForm = document.querySelector('.level-modal form');
        document.querySelector('.level-modal').close();
        setLevel(levelForm.level.value);
        setStartGame(true);
    }
    return ( 
        <dialog className="level-modal">
        <form  >
            <fieldset>
                <legend>select defficulty level</legend>
                <input type="radio" name="level" value="easy" id="easy-level" onChange={levelValue} />
                <label htmlFor="easy-level">easy</label>
                <input type="radio" name="level" value="hard" id="hard-level" onChange={levelValue}/>
                <label htmlFor="hard-level">hard</label>
            </fieldset>
        </form>
        </dialog>
     );
}
const MessageModal =({score,highestScore,result,startGame,setStartGame,setResult,setScore,setLevel})=>{
    if(!startGame && result.length !== 0){
            
            
        document.querySelector('.message-modal').showModal();
  }
    

        const generateMessage = ()=>{
            if(result ==='win'){
                return "Winner All Cats Are Happy";
            }else{
                return "Opss You Lose against Cats";
            }
        }
      const message =generateMessage();

        return (
            <dialog  className="message-modal" > 
                 <h3>{message}</h3>
                <img src="" alt="" />
                <div>
                    <p className="score">score:{score}</p>
                    <p className="highest-score">highest score{highestScore}</p>
                </div>
                {/* reset game varibles */}
                <form method="dialog" onSubmit={(e)=>resetGame(setScore,setResult,setStartGame,setLevel,e.target.level.value)} >
                    <fieldset>
                        <legend>select defficulty level</legend>
                        <input type="radio" name="level" value="easy" id="easy-level" />
                        <label htmlFor="easy-level">easy</label>
                        <input type="radio" name="level" value="hard" id="hard-level"/>
                        <label htmlFor="hard-level">hard</label>
                    </fieldset>
                    
                    <button type="submit" >play again</button>
                </form>
            </dialog>
        )
}
// const showMessageModal = (startGame,result) => {
//     useEffect(
//         ()=>{
        
//             if(!startGame && result.length !== 0){
            
            
//                   document.querySelector('.message-modal').showModal();
//             }
//         }
//      ,[startGame,result]);
// }
export {LevelModal ,MessageModal} ;