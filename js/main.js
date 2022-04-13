const elForm = document.querySelector(".search");
const elInput = document.querySelector(".search__input");
const elList = document.querySelector(".list");
const elTemplateList = document.querySelector(".template").content;

let inputVal = elInput.value.trim();
const API_KEY = "c0e16357"; 
let searchFilm = "hulk";
// console.log(elTemplateList);

function renderFilm(arr, element){

    element.innerHTML = "";
    elInput.value = "";
    const filmFragment = document.createDocumentFragment();

    arr.forEach(e => {
        const newItem = elTemplateList.cloneNode(true);

        newItem.querySelector(".list__img").src = e.Poster;
        newItem.querySelector(".list__title").textContent = e.Title;
        newItem.querySelector(".list__year").textContent = e.Year;
        newItem.querySelector(".list__type").textContent = e.Type;

        filmFragment.appendChild(newItem);
    });

    element.appendChild(filmFragment);

}

async function getFilm() {
    
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchFilm}`);
    const data = await res.json();
    // console.log(res);
    console.log(data);
    renderFilm(data.Search, elList)
}
// getFilm()


elInput.addEventListener("change", (evt) => {
    console.log(evt.target.value);
    searchFilm = evt.target.value;
    getFilm()
})
getFilm()

