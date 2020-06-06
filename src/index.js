console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => {
    for (let i=0; i<json.message.length; i++) {
        const image = document.createElement("img");
        image.src = json.message[i];
        document.body.append(image)
    }
  });

   const dropDown = document.querySelector('#breed-dropdown')
   dropDown.addEventListener('change', (e) => {
     console.log(e.target.value)
     displayBreeds(e.target.value)
   })
})

    
const displayBreeds = (filter) => {
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
      const uList = document.querySelector('#dog-breeds')
       
      const breedArray = Object.keys(json.message) 
      for (let i=0; i<breedArray.length; i++) {
          if (breedArray[i][0] == filter) {
            const listItem = document.createElement("li")  
            listItem.addEventListener('click', function(e) {
              console.log(e)
              e.target.style.color = "blue"
            })
            listItem.innerText = breedArray[i] 
            uList.append(listItem)
          }
      }
    });
}