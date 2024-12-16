import { useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const getCat = (catNumber) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'du6d1qifw'} });
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image(`cats/photo-cat-${catNumber}`)
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(200).height(300)); // Transform the image: auto-crop to square aspect_ratio

    return img;
};
const initialCats = (setCats,level,startGame) => {
   
    useEffect(
        ()=>{
            const LIMIT=15;
            const CATCOUTN = level === 'easy'? 6 : 12;
            let counter = 0;
            const newCats = []
            const catNumbers = []

            while(counter < CATCOUTN){ 
              const catNumber = Math.floor(Math.random() * LIMIT);
            //   console.log(catNumbers,catNumber,!catNumbers.includes(catNumber))
                if(!catNumbers.includes(catNumber)){
                    catNumbers.push(catNumber);
                    // console.log(catNumbers)
                    const  newCatImg = getCat(catNumber);
                    newCats.push({
                        id:crypto.randomUUID(),
                        catImg:newCatImg
                    })
                    counter++;  
                }
            }
            setCats(newCats)
        },
        [level,startGame]
    );
  
}
function checkWin(e,cats,setCats,score,highestScore,result,setScore,setHighestScore,setStartGame,setResult,setIsShuffling){
 
    const id = e.target.dataset.id ;
    const cat = cats.find(cat=>cat.id === id )
    if(cat.clicked){
        setResult("lose");
        setStartGame(false); 
    
    }else{
        updateClickedItem(e,cats,setCats);
        setScore(score +1);
    }
    if(cats.every((cat=>cat.clicked))){
        setResult("win");
        setStartGame(false)
      
    }
 
   shuffleCats(cats,setCats,setIsShuffling)
}

function updateClickedItem(e,cats,setCats){
   
    const newCats =cats.map(cat=>{
        if(cat.id === e.target.dataset.id){
            cat.clicked= true;
        }
        return cat;
    });
    setCats(newCats)
   
}
const CatsContainer = ({cats,setCats,score,highestScore,result,setScore,setHighestScore,setStartGame,setResult,isShuffling,setIsShuffling}) => {
    return ( 
        <ul>
        
           {cats.map(cat=>{
        return(<li className={isShuffling ? 'hide-show':''} key={cat.id} data-id={cat.id} onClick={(e)=>checkWin(e,cats,setCats,score,highestScore,result,setScore,setHighestScore,setStartGame,setResult,setIsShuffling)} >
                <AdvancedImage cldImg={cat.catImg}/>
            </li>)
           })}
          
        </ul>
     );
}



function shuffleCats(cats,setCats,setIsShuffling){
    const availableCards = [...cats];
    const shuffledCats = [];
    while(availableCards.length){
    const index = Math.floor(Math.random()* availableCards.length);
    const newCard = availableCards[index];
    // newCard.id = crypto.randomUUID();//override old id
    shuffledCats.push(newCard);
    availableCards.splice(index,1)

    }
    // useEffect(
    //     ()=>{
    //         const catShuffle = setTimeout(() => {
    //             setIsShuffling(true);
    //         }, 1000);
    //     },[])
    setIsShuffling(true)
    document.querySelector('li').addEventListener('animationend',()=>{
    setIsShuffling(false)
    })
    setCats(shuffledCats)
}

function resetGame(setScore,setResult,setStartGame,currentLevel,setLevel,newLevel,setIsShuffling){
    setScore(0);
    setResult('');
    setIsShuffling(false);
    setStartGame(true);
    setLevel(newLevel || currentLevel)
}


export {initialCats,CatsContainer,resetGame};