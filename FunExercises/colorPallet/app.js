const colorsSection = document.querySelector("#colors");

colorsSection.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    document.body.style.backgroundColor = event.target.dataset.hex;
    for (let btn of document.querySelectorAll("button")) {
        btn.classList.remove("active")
    }
    event.target.classList.toggle("active");

})