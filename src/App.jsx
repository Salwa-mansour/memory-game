import { useState } from "react";
// import { Header } from "./componunts/Header";
import {Heading} from "./componunts/Heading";
import { LevelModal } from "./componunts/Modals";
import { initialCats ,CatsContainer } from "./componunts/cats";
import './styles/App.css'

const ImageGame = () => {
 const [cats,setCats]=useState([]);
 const [level,setLevel]=useState('easy');
 const [score,setScore]=useState(0);
 const [highestScore,setHighestScore]=useState(0)

   initialCats(setCats,level)

   return( 
      <div>
         <CatsContainer cats={cats} setCats={setCats} score={score} setScore={setScore} highestScore={highestScore} setHighestScore={setHighestScore} />
         <Heading score={score} highestScore={highestScore} />
         <LevelModal setLevel={setLevel} />
      </div>
   )

}
 
const App = () => {
 return <ImageGame/>
};

export default App