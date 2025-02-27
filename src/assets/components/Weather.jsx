import { useEffect, useState } from 'react';
import Search from './search';

export default function Weather(){
   const [search, setSearch] = useState("")
   const [weather, setWeather] = useState(null)
   const [loading, setLoading] = useState(false)

   async function fetchWeather(params) {
      setLoading(true);
       try {
           const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=7cfc3b41dd6eaf08e502359287ed07b2`)
           const data = await res.json();
           console.log(data);
           if(data){
            setWeather(data)
            setLoading(false)
           }
       } catch (error) {
         
         console.log(error);
           
         setLoading(false);
       }
   }
   
   async function handleSearch(){
       fetchWeather(search)
   }
   useEffect(()=>{fetchWeather("Nairobi")},[])
     
   return <div>
      <Search search={search}
      setSearch={setSearch}
      handleSearch={handleSearch}/>
      {
        
         
            loading ? (
              <div className='loading'><h1>please wait...</h1></div>
            ) : (
              <div className='weather-details'>
                <div className='name'><h2>{weather?.name}, <span>{weather?.sys?.country}</span></h2></div>
                <div className='temp'><h3>{weather?.main?.temp}°C</h3></div>
                <div className='desc'><h4>{weather?.weather?.[0]?.description}</h4></div>
              </div>
            )
          
          
      }
   </div>
}

