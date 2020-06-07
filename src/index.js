console.log('%c HI', 'color: firebrick')

// <h1>Dog CEO</h1>

// <div id="dog-image-container">
//   <!-- images here -->
// </div>

// <hr>
// <label for="select-breed">Filter Breeds That Start with:</label>
// <select id="breed-dropdown" name="select-breed">
//   <option value="a">a</option>
//   <option value="b">b</option>
//   <option value="c">c</option>
//   <option value="d">d</option>
// </select>

// <ul id="dog-breeds">

// </ul>
// 
const url = 'https://dog.ceo/api/breeds/image/random/4'
fetch(url)
.then(res => res.json())
.then(dogsImg => { 
  dogsImg.message.forEach(dogImg => {
    getDog(dogImg)
  })
})

function getDog(dogImg){
  const div = document.querySelector('#dog-image-container')
  const img = document.createElement('img')
  img.src = dogImg
  div.append(img)
}

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(breedsObj => {
  breeds = Object.keys(breedsObj.message)
  for(const breed of breeds){
    getBreed(breed)
  }
})

function getBreed(breed){
  const ul = document.querySelector('#dog-breeds')
  const li = document.createElement('li')
  li.innerText = breed
  ul.append(li)
  li.addEventListener('click',(e) => {
    e.target.style.color = 'red'
  })
}

