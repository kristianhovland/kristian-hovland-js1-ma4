const gameLink = "https://api.rawg.io/api/games/4200";

fetch(gameLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createGameDetails(json);
    })

    .catch(function (error) {
        console.log(error);
    });

function createGameDetails(json) {

    const heading = document.querySelector("h1");
    heading.innerHTML = json.name;

    const image = document.querySelector(".image");
    image.style.backgroundImage = `url('${json.background_image}')`;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}
