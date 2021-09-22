import React, { Component } from 'react'
import img3 from '../assets/img/img3.jpg'

class homepageComponent extends Component {
  render() {
    return (
      

         <div>
           <img className="img_1" src={img3}/>
        	<div className= "text_1"> 
        		<h1 className= "txt"> UNIVERSIDAD DE LA CALLE NUEVA </h1>   
        	</div> 
        </div>
    )
  }
}

export default homepageComponent