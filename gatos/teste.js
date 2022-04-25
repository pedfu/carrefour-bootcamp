const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const button = document.getElementById("buttonCat");

async function getCat() {
 const data = await fetch(BASE_URL);
 const jsonData = await data.json();
 return jsonData;
}

async function loadImg() {
    console.log('clicked');
    const img = document.getElementById("cat");
    const obj = await getCat();
    console.log(obj);
    img.src = obj.webpurl;
}

button.addEventListener('click', loadImg);

loadImg();