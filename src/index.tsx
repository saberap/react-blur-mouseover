import * as React from 'react'
import styles from './styles.module.css'

interface Image {
  src:string;
  width?:string;
  height?:string;

}
interface Props {
  firstImage:Image;
  secondImage:Image;
  stdDeviation?:number;
  radius?:number;

}

export const ReactBlurMouseover = ({ firstImage,secondImage, stdDeviation, radius }: Props) => {

  const mouseMoveHandler : (event:React.MouseEvent) => void = (e) => {
    e.preventDefault();
    const upX = e.clientX;
    const upY = e.clientY;
    let mask : HTMLElement | null= document.getElementById('circle');
    console.log(mask)
    if(mask){
    mask.setAttribute("cy", (upY - 5) + 'px');
    mask.setAttribute("cx", (upX) + 'px');
    }
  }

  return (
 
    <svg onMouseMove={mouseMoveHandler} className={styles.blur} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
        <image  xlinkHref={firstImage.src} width={firstImage.width || "100%"} height={firstImage.height || "auto"} />
        <filter id="filter2">
            <feGaussianBlur stdDeviation={stdDeviation || 5} />
        </filter>
        <mask id="mask1">

            <circle id='circle' cx="-50%" cy="-50%" r={radius || 50} fill="white" filter="url(#filter2)" />
        </mask>
        <image xlinkHref={secondImage.src} width={secondImage.width || "100%"} height={secondImage.height || "auto"} mask="url(#mask1)"  />
    </svg>

  )
}
