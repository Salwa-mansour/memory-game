import { useState } from "react";
import { initialCats ,CatsContainer,ShuffleCats } from "./componunts/cats";
import './styles/App.css'

const ImageGame = () => {
 const [cats,setCats]=useState([])

   initialCats(setCats)

   return( 
      <div>
         <ShuffleCats cats={cats} setCats={setCats} />
         <CatsContainer cats={cats} />
      </div>
   )

}
 
const App = () => {
 return <ImageGame/>
};

export default App