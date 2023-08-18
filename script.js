window.onload = function() {
    const imageGallery = document.getElementById("imageGallery");
    const imageFolder = "images/"; // Path to your image folder
    const imageCount = 13; // Number of images

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = imageFolder + i + ".jpg"; // Change the image file naming if needed
        img.alt = "Image " + i;
        img.classList.add("gallery-image");
        imageGallery.appendChild(img);
    }
};
