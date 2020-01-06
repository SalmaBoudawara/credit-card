import React from 'react'
import './Carte.css'
import FormatCarte from'../Carte/FormatCarte'
class Carte extends React.Component {
    constructor(props){

        super(props);
        this.state={

            number :"•••• •••• •••• ••••",
            date:"",
            name:"Foulen",
        };
     
    }
    //  function pour changer les données
    setNumber=(event)=>{
      const numReg= new RegExp (/^[0-9]*$/)
       if(event.target.value.length<=16){
        if(!numReg.test(event.target.value)){

         event.target.value=""
         this.setState({number:""})
        }
          else 
          this.setState({number:event.target.value})
        }
        else{
         
          event.target.value= this.state.number.substr(0, 19)}
          
       
    }

         formatNumber = (number) => {
                  let nbr = String(number).padEnd(16,"•");
                   return nbr.slice(0,4).concat(" ",nbr.slice(4, 8)).concat(" ",nbr.slice(8, 12)).concat(" ",nbr.slice(12));
                }

  

     setDate = (event) =>{
                     
      if (isNaN(event.target.value.slice(event.target.value.length-1, event.target.value.length))){
                   event.target.value="";
               
                   this.setState({date: ""})
                   return console.error();
                   
                 }
                  else
                  {
               
                this.setState({date: event.target.value})

                if (this.state.date.length==1){
                      event.target.value = event.target.value+"/";
                      if ((event.target.value) >"13")  {
                           
                        event.target.value="";
                        this.setState({date: ""})
                         return; 
           
                    }
                     else
               
                       this.setState({date: event.target.value})  
                
          
                  }
                 }
              
             }



    setName=(event)=>{
      const  regName=new RegExp(/^[a-zA-Z ]+$/)
      if  (   ((event.target.value)).length <=20) 
      if  ( regName.test(event.target.value) && regName.test(event.target.value.trim()))  
      {
      
       this.setState({name: event.target.value})
      }
        else 
          {

        event.target.value ="";
       this.setState({name: ""})
     }
     else 
     event.target.value = this.state.name.substr(0, 20);
  
             }
// affichage
    render(){
    return (
    <div className="carte-input">
           <FormatCarte userName={this.state.name.toUpperCase()} userNumber={this.formatNumber(this.state.number)}userDate={this.state.date}/>
         
                
           <div className="input">
               <form>
              <input type="text" name="number" onChange={this.setNumber} />
              <input type="text"  name="name"onChange={this.setName} />
              <input type="text" name="date" onChange={this.setDate} maxLength="5"/>
              </form>
           </div>
    </div>
    )
}

}
export default Carte