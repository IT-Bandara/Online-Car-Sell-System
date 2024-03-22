import React, { useEffect, useState } from 'react'
import { HomeImage } from '../../Data/HomeImage'
import './Slider.css'

function Slider(props) {

  const [activeImage, setActiveImage] = useState(0);

  const nextImg = () => {
    setActiveImage((activeImage+1)%HomeImage.length);
  }

  const prevImg = () => {
    if(activeImage <= 0){
      setActiveImage(HomeImage.length-1)
    }else{
      setActiveImage(activeImage-1)
    }
  }

  useEffect( () => {
    let timer = setTimeout(()=>{
      nextImg();
    },props.time)

    return () => {
      clearTimeout(timer);
    }
  },[activeImage])

  return (
    <div className={props.className}>
      <div className='carousel'>

        <button className={`${props.className}-prev-btn`} onClick={prevImg}>&#x276E;</button>

        {
          HomeImage.map((item,i)=>{
            return(
              <img className={activeImage === i ? 'img':'hide'} src={item.url}  alt={item.alt} key={item.id}/>
            )
          })
        }

        <button className={`${props.className}-next-btn`} onClick={nextImg}>&#x276F;</button>


      </div>
    </div>
  )
}

export default Slider
