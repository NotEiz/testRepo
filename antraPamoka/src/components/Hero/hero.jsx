import React from "react"
import './hero.css'

const Hero =({title, subtitle, color}) => {
     return (
          <div  id={color} className="heroWraper">
               <h1>{title}</h1>
               <h2>{subtitle}</h2>
          </div>
     )
}

export default Hero