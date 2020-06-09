console.log('%c HI', 'color: firebrick')
const url = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


myFetches();

function myFetches() {
  fetch(url)
    .then(res => res.json())
    .then(results => {
      for (i = 0; i < results.message.length; i++) {
        currentImgUrl = results.message[i]
        addDogToDOM(currentImgUrl)
      }
    })

  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
      // debugger
        breeds = Object.keys(results.message);
        // debugger
        addBreedToLi(breeds)
    })
}


function addDogToDOM(currentImgUrl) {
  const imgContainer = document.querySelector('#dog-image-container')
  const img = document.createElement('img')

  img.src = currentImgUrl

  imgContainer.append(img)
}

function addBreedToLi(breeds) {
  // debugger
  const dogBreedUl = document.querySelector('#dog-breeds')

  for(i = 0; i < breeds.length; i++) {
    const breedLi = document.createElement('li')
    breedLi.innerText = breeds[i]
    dogBreedUl.append(breedLi)
    liColorClick(breedLi);
  }
  
}

function liColorClick(breedLi){
  breedLi.addEventListener ('click', ()=> {
    breedLi.style.color = 'blue'
  })
}

