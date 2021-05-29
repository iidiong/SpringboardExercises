const form = document.querySelector("#form");
const brandName = document.querySelector("input[name='brand name']")
const brandColor = document.querySelector("input[name='brand color']")
const brandfont = document.querySelector("input[name='font size']")
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let brandLogo = makeLogo(brandName.value, brandColor.value, brandfont.value);
    const span = (document.querySelector("span"));
    if (span) {
        span.remove();
        result.append(brandLogo);
    } else {
        result.append(brandLogo);
    }
    console.log(event)
})

function makeLogo(name, color, font) {
    const logo = document.createElement("span");
    logo.innerText = name;
    logo.style.color = color;
    logo.style.fontSize = font + "px";
    return logo;

}