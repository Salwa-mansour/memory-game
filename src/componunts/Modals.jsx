const LevelModal = ({setLevel}) => {
    window.onload = ()=>{
    document.querySelector('.level-modal').showModal();
    }
    function levelValue(){
        const levelForm = document.querySelector('.level-modal form')
        document.querySelector('.level-modal').close()
        setLevel(levelForm.level.value)
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
function MessageModel({score,highestScore,win,startGame}){
        const message = ()=>{
            if(win){
                return "Winner All Cats Are Happy";
            }else{
                return "Opss You Lose against Cats";
            }
        }


        return (
            <dialog>
                <h3>{message}</h3>
                <img src="" alt="" />
                <div>
                    <p className="score"></p>
                    <p className="highest-score"></p>
                </div>
                {/* reset game varibles */}
                <button>play again</button>
            </dialog>
        )
}
export {LevelModal} ;