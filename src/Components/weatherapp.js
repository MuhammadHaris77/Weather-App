import { useEffect, useState } from "react"
import '../App.css'
export default function Weather(){
 const [cityName,setCityName]= useState()
const [searchData,setSerachData]=useState('')

  useEffect(()=>{ fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`)
  .then(response => response.json())
  .then(json => setCityName(json.main))
  

  
  
  

},[searchData])

    return(
     <>
     <h1>Weather App</h1>

     <div>
         <input className="input"  placeholder="enter city name?" type="search" value={searchData} onChange={(e)=>{setSerachData(e.target.value)}  } />
     </div>
     {
      !cityName ? (
        <div className="para">
               <p> Not Found</p>
             </div>
        
      )  : (
        <div className="main-div">
        <div>
         <h1>{searchData}</h1>
        </div>
        <div>
        <h3>Temperature : {(cityName.temp - 32 )* (5/9)} C</h3>
       
        </div>
                       
         </div> 
  
      )
     }
          </>
)
}