const breedUl = document.getElementById("dog-breeds");
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogDiv = document.getElementById("dog-image-container");

console.log('%c HI', 'color: firebrick')

function loadImages() {
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    // .then(res => res.json())
    .then(function(json) {
        addImage(json.message)
    })
    // .then(results => {
        // results.message.forEach(image => addImage(image))
    // })
}

function addImage(dogs) {
    dogs.forEach(dog => {
        const dogImg = document.createElement("img")
        dogImg.setAttribute("src", dog)
        dogDiv.append(dogImg)
    })
}

function loadBreedList() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
        breeds = Object.keys(results.message)
        breeds.forEach(breed => addBreed(breed))
    });
}

function addBreed(breed) {
    const dogLi = document.createElement("li")
    dogLi.innerText = breed
    breedUl.append(dogLi)
    dogLi.addEventListener('click', e => {
        e.target.style.color = "green"
    })
}

// function updateColor() {
//     event.target.style.color = 'green'
// }



loadImages();
loadBreedList();

