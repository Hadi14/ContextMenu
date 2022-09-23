const contextMenu = document.getElementById("contextMenu");






document.body.addEventListener('click', () => {
    contextMenu.style.display = "none";
})
document.body.addEventListener('keydown', (event) => {
    if (event.key === "Escape")
        contextMenu.style.display = "none";
})


document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = event.pageX;
    contextMenu.style.top = event.pageY;

})