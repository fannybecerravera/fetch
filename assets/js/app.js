const inputText = document.querySelector('input');//grardaremos en constante a input el id del p en html
const containerTitle = document.getElementById('title'); //grardaremos en constante a title el id del p en html
const containerYear = document.getElementById('year');//grardaremos en constante a year el id del p en html
const containerRuntime =document.getElementById('runtime');//grardaremos en constante a runtime el id del p en html
const containerImg =document.getElementById('img');//grardaremos en constante a img el id del p en html

inputText.addEventListener('keypress', () => {//loque este dentro de input escrito  y al apretar una tecla (keypress)pasara:
let key = event.which || event.keyCode;//guardaremos en un variable y queremos que recononcen el evento de la tecla, event.which (reconoce el codigo al apretar la tecla)o el codigo que saque con event.keyCode
if (key === 13){ //si el codigo que se guardo es 13 (tecla enter)
let movie = inputText.value;//como tomo el valor el input con value entonces lo guardo en una variable los .value son siempre let
console.log(movie); //para ver si funciona
inputText.value = '';//luego de que saque o tome el valor del input limpio el input pasandole el valor de string vacio


//llamaremos a fetch y esta es su sintaxis
//dentro de fetch va la url de nuestra API el url debe estar dentro de temple strins (``).ahora modificamos la url al leer la documentacion de la API nos dice que para reconocer el titulo de la pelicula debemos despues del signo de interrogacion poner t= mas el parametro entre yaves luego podemos nuestra apikey que me llego al correo
fetch(`http://www.omdbapi.com/?t=${movie}&apikey=b638a795`)
.then(response => response.json())// fetch funciona con las promesa la sintaxis de las promesas son con .then(entonces)el response.json me indica que cuando se haga la llamada y peticion de fetch es una promesa la que va estar esperando
.then(data => {//sila peticion que me estas haciendo es correcta enronces te envio la respuesta con esa respesta entonces voy a hacer por lo que vuelvo a poner .then y mi respuesta esta guardada en data
  console.log(data);//haremos un console log de data para ver que nos entrega 
  renderInfo(data);// ahora llamare a una funcion que creare mas abajo
})
}
})

const renderInfo = (data) => { //el parametro puede ponerle cualquier nombre en este caso le pusimos data. entonces mi duncion se llamara renderinfo y le paso el parametro data data es la respuesta de la peticion
containerTitle.innerHTML = data.Title;//ahora tomaremos los elemnto del html que guardamos en la constante mas arriba con innerHTML. entonces le pasamos el valor data.Title(data es la respuesta que recibimos y Title es la propiedad que estamos buscando en la API)
containerYear.innerHTML = data.Year;
containerRuntime.innerHTML = data.Runtime;
containerImg.innerHTML = `<img src="${data.Poster}">`;
}