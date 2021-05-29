/* 
    e.pageX /windowX = x / 255
*/


document.addEventListener("mousemove", (e) => {
    const windowX = window.innerWidth;
    const windowY = window.innerHeight;
    console.log(`${windowX} , ${windowY}`);
    console.log(e.pageX);
    console.log(e.pageY);
    let r = Math.floor((e.pageX/windowX)*255)
    let b = Math.floor((e.pageY/windowY)*255)
    let m = (e.pageY/e.pageX);
    let g =m * Math.floor((Math.floor(Math.hypot(windowX,windowY))));
    console.log(r + ", 0, " + b);    
    document.body.style.backgroundColor = `rgb(${r},0,${b})`;
});
