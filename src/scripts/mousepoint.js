const mousePoint = document.querySelector("#mousePoint");
const mouseImage = document.querySelector(".mousePoint");


document.addEventListener("mousemove", (event) => {
    const mouseX = event.pageX; // Posição X do mouse
    const mouseY = event.pageY; // Posição Y do mouse

    mousePoint.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

document.addEventListener("mousedown", () => {
    mouseImage.src = ("./src/images/hammer2.png");
    mousePoint.style.top = ("-30px");
    mousePoint.style.left = ("-30px");
})

document.addEventListener("mouseup", () => {
    mouseImage.src = ("./src/images/hammer1.png");
    mousePoint.style.top = ("-82px");
    mousePoint.style.left = ("8px");
    
})