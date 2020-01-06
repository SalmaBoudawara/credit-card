import React from 'react'
import '../Function/Carte.css'
export default function FormatCarte(props) {




    return (
        <div className="carte">
                 <h1>Company name</h1>
                  <img className="sim" src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png"alt="logo"/>

                  <p className="number">{props.userNumber.padEnd(16,'•')}</p>
                <div className="pati-bas-carte">
              
                     <div className="logo">
                    
                            <p className="name-preview" >{props.userDate.padEnd(5,'•')}</p>
                            <p className="name">{props.userName}</p>
                     </div>
                     <img className="mastercard" src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png"alt ="logo carte"/> 
                     </div>
                     
                     
        </div>
    )
}
