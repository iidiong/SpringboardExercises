console.log("Let's get this party started!");

const imageContainer = document.querySelector(".imageContainer");
const giphyApiKey = "E23VXnvj3e0uQzWvg2QNOgTEbGjTH9Ss";
const baseURL = "http://api.giphy.com/v1/gifs/";
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


form.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.className);
    if (event.target.className === "submitBtn" && searchField.value !== "") {
        getImage(searchField.value);
    }
    else if (event.target.className == "removeBtn") {
        const images = document.querySelectorAll("img");
        for (let image of images) {
            image.remove();
        }
    }
});

async function getImage(searchTerm) {
    const res = await axios.get(`${baseURL}search?q=${searchTerm}&api_key=${giphyApiKey}`);
    const { original_still } = res.data.data[0].images;
    createImage(original_still.url);
}
function createImage(image) {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", image);
    imageContainer.append(imgElement);
}

