const btn=document.getElementById('btn');
const city= document.getElementById('city');
const cityName= document.getElementById('cityName');
const temperature= document.getElementById('temperature');
const description= document.getElementById('description');

btn.addEventListener('click', ()=>{
    const API_KEY="https://api.openweathermap.org/data/2.5/weather?q="+ city.value + "&appid=270976976bc56c64efe8b9b43350d84f&lang=fr";
    fetch(API_KEY)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let cityValue= data['name'];
        let tempValue= data['main']['temp'];
        let degreeTemp= Math.floor(tempValue-273);
        let cityDescription= data['weather'][0]['description']

        cityName.innerHTML=cityValue;
        temperature.innerHTML=`${degreeTemp}&degC`;
        description.innerHTML=cityDescription;
        })
    .catch(err => alert(err));
} );