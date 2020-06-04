console.log('%c HI', 'color: firebrick')
// const breeds = [];
let breedsDog = [];

function fetchDogs(){
    
    return fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(function(json) {
        return createImg(json);
    })
}

function fetchBreeds(){
    
    return fetch ("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(function(json) {
        return createBreed(json);
    })
}

function createImg(imgUrl){

    for (const element of imgUrl.message){
        console.log()
        const getId = document.getElementById('dog-image-container');
        const ulDogs = document.createElement('ul')
        const listDogs = document.createElement('li');
        const img = document.createElement('img');
        
        img.setAttribute('src',element);
        listDogs.append(img)
        ulDogs.append(listDogs)
        getId.append(ulDogs)
        // ulDogs.textContent = ''
    }
}

function createBreed(breedList){
    
    console.log('Test', breedList.message)
    const breeds = Object.keys(breedList.message)
    for (const element of breedList.message){
        const getId = document.getElementById('dog-image-container');
        const ulDogs = document.createElement('ul')
        const listDogs = document.createElement('li');
        
        ulDogs.append(listDogs)
        getId.append(ulDogs)
        breedsDog = Object.keys(breedList.message)
        // ulDogs.textContent = `${breeds}`
    }

}

document.addEventListener('DOMContentLoaded',function(){
    fetchDogs();
    fetchBreeds();
})
