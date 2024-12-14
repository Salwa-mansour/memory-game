const Heading = ({score,highestScore}) => {
    return(
        <header>
           <h1>Memory Game</h1>
            <p>Don't hit the same image towice else you lose</p>
            <section>
                <p>score:{score}</p>
                <p>highest score:{highestScore}</p>
            </section>
        </header>
        )
}
 
export {Heading} ;