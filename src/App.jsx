import { useState } from "react";
// import { Header } from "./componunts/Header";
import {Heading} from "./componunts/Heading";
import { LevelModal ,MessageModal} from "./componunts/Modals";
import { initialCats ,CatsContainer } from "./componunts/cats";
import './styles/App.css'

const ImageGame = () => {
 const [cats,setCats]=useState([]);
 const [level,setLevel]=useState('easy');
 const [score,setScore]=useState(0);
 const [highestScore,setHighestScore]=useState(0);
 const [result,setResult]=useState('');//win or lose
 const [startGame,setStartGame]=useState(false);

   initialCats(setCats,level)

   return( 
      <div>
       
         <CatsContainer cats={cats} setCats={setCats} score={score} setScore={setScore} result={result}
          highestScore={highestScore} setHighestScore={setHighestScore} setResult={setResult} setStartGame={setStartGame} />

         <Heading score={score} highestScore={highestScore} />

         <LevelModal setLevel={setLevel} setStartGame={setStartGame} />

       {  
        <MessageModal score={score} highestScore={highestScore} result={result} startGame={startGame}
         setStartGame={setStartGame} setResult={setResult} setScore={setScore} setLevel={setLevel} />
        }
  </div>
   )

}
 
const App = () => {
 return <ImageGame/>
};

export default App