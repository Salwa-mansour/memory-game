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
const initialCats = (setCats,level) => {
   
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
        [level]
    );
  
}
function checkWin(e,cats,setCats,score,highestScore,setScore,setHighestScore){
    const id = e.target.dataset.id ;
    const cat = cats.find(cat=>cat.id === id )
    if(cat.clicked){
        console.log('you lose')
        setScore(0)
    }else{
        updateClickedItem(e,cats,setCats);
        upgradeScore(score,highestScore,setScore,setHighestScore)
    }
    if(cats.every((cat=>cat.clicked))){
        console.log('you win')
        upgradeScore(score,highestScore,setScore,setHighestScore)
        setScore(0)
    }
   shuffleCats(cats,setCats)
}
function updateClickedItem(e,cats,setCats){
   
    const newCats =cats.map(cat=>{
        if(cat.id === e.target.dataset.id){
            cat.clicked= true;
        }
        return cat;
    });
    setCats(newCats)
    console.log(cats)
}
const CatsContainer = ({cats,setCats,score,highestScore,setScore,setHighestScore}) => {
    return ( 
        <ul>
           
           {cats.map(cat=>{
        return(<li key={cat.id} data-id={cat.id} onClick={(e)=>checkWin(e,cats,setCats,score,highestScore,setScore,setHighestScore)} >
                <AdvancedImage cldImg={cat.catImg}/>
            </li>)
           })}
          
        </ul>
     );
}

function upgradeScore(score,highestScore,setScore,setHighestScore){
 
       setScore(score +1);
       if(score >highestScore){
        setHighestScore(score)
       }
    
}

function shuffleCats(cats,setCats){
    const availableCards = [...cats];
    const shuffledCats = [];
    while(availableCards.length){
    const index = Math.floor(Math.random()* availableCards.length);
    const newCard = availableCards[index];
    // newCard.id = crypto.randomUUID();//override old id
    shuffledCats.push(newCard);
    availableCards.splice(index,1)

    }
    setCats(shuffledCats)
}

  


export {initialCats,CatsContainer};