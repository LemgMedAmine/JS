
function upDate(previewPic) {   
    console.log("Event triggered");
    console.log("Source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}
function undo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
