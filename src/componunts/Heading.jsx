import '../styles/header.css'
const Heading = ({score,highestScore}) => {
   
    return(
        <header>
           <h1>Memory Game</h1>
          
            <section className="score-container">
                <p>score:{score}</p>
                <p>highest score:{highestScore}</p>
            </section>
            <p className='note'>Don't hit the same image towice else you lose</p>
        </header>
        )
}
 
export {Heading} ;