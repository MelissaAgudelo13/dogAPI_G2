async function perrito() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responsejson = await response.json();
    var img = responsejson.message;
    var contenedorperrito = document.querySelector('.contenedorperrito')
    contenedorperrito.innerHTML= "<img src='"+img+"'alt='perrito'/>";
}