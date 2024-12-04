

function upDate(previewPic) {
    console.log("Event triggered: upDate");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}

function undo() {
    console.log("Event triggered: undo");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
function addTabFocus() {
    console.log("Page loaded: Adding tabindex attributes");
    const images = document.querySelectorAll(".preview");
    images.forEach((img) => {
        img.setAttribute("tabindex", "0");
    });
}
window.onload = addTabFocus;
