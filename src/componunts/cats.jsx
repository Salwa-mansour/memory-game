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
const initialCats = (setCats) => {
   
    useEffect(
        ()=>{
            const LIMIT=15;
            const CATCOUTN = 6;
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
        []
    );
  
}
const CatsContainer = ({cats}) => {
    return ( 
        <ul>
           
           {cats.map(cat=>{
        return(<li key={cat.id} >
                <AdvancedImage cldImg={cat.catImg}/>
            </li>)
           })}
          
        </ul>
     );
}
 const ShuffleCats = ({cats,setCats}) => {

   function shuffleCats(cats,setCats){
     const availableCards = [...cats];
     const shuffledCats = [];
     while(availableCards.length){
        const index = Math.floor(Math.random()* availableCards.length);
        const newCard = availableCards[index];
        newCard.id = crypto.randomUUID();//override old id
        shuffledCats.push(newCard);
        availableCards.splice(index,1)

     }
     setCats(shuffledCats)
   }
   return(
    <button onClick={()=>shuffleCats(cats,setCats)} >shuffle</button>
   )
 }
  


export {initialCats,CatsContainer,ShuffleCats};