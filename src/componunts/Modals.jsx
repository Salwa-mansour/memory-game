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
const MessageModal =({score,highestScore,result,startGame,setStartGame,setResult,setScore,level,setLevel})=>{
    const imgFolder="https://res.cloudinary.com/du6d1qifw/image/upload/f_auto/q_auto/c_auto,g_auto,w_150/v1734204009/cats/";
    let catImg ="";
    let message =""
   
        if(!startGame && result.length !== 0){
                    
                    
                document.querySelector('.message-modal').showModal();
             }
    

            if(result ==='win'){
                message= "Winner All Cats Are Happy";
                catImg="cute-happy-cat.png";
            }else{
                message= "Opss You Lose against Cats";
                catImg="cute-playing-cat.png"
            }
      

        return (
            <dialog  className="message-modal" > 
                 <h3>{message}</h3>
                <img src={imgFolder+catImg} alt="" />
                <div>
                    <p className="score">score:{score}</p>
                    <p className="highest-score">highest score{highestScore}</p>
                </div>
                {/* reset game varibles */}
                <form method="dialog" onSubmit={(e)=>resetGame(setScore,setResult,setStartGame,level,setLevel,e.target.level.value)} >
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