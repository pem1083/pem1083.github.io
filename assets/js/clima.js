    
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude + 
  // "<br>Longitude: " + position.coords.longitude;


//CONSUMO API WEB//
const APIkey = "4fecb089c0fa417a4b11ea1e55f7a414";
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIkey}`;
  
    async function climaActual() {
      const resp = await fetch(URL_API);
      const data = await resp.json();
  
      console.log(data);
  
      document.querySelector("#city").innerHTML = "Ciudad: "+ data.name;
      document.querySelector("#temp").innerHTML = "Temperatura: " + data.main.temp + "C°";
      document.querySelector("#pron").innerHTML = "Clima: "+data.weather[0].description;
      document.querySelector("#humidity").innerHTML = ` Humedad: ${data.main.humidity}` + "%";
  
    }
  
    climaActual();
 }
//  ***************************************************dano
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}
  
 function showPosition(position) {
  const APIkey = "4fecb089c0fa417a4b11ea1e55f7a414";
  const URL_API = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIkey}`;

  async function climaActual() {
    const resp = await fetch(URL_API);
    const data = await resp.json();

    console.log(data);

    document.querySelector("#city").innerHTML = ` Ciudad: ${data.name}`;
    document.querySelector("#temp").innerHTML = ` Temperatura: ${data.main.temp}` + "°C";
    document.querySelector("#pron").innerHTML = ` Descripción: ${data.weather[0].description}`;
    document.querySelector("#humidity").innerHTML = ` Humedad: ${data.main.humidity}` + "%";
  }

  climaActual();
}

// Obtén el botón por su id
var button = document.getElementById("myButton");

// Asigna la función al evento click del botón
button.addEventListener("click", getLocation);  


 

