window.onload = function() {
    const imageGallery = document.getElementById("imageGallery");
    const imageGalleryC1 = document.getElementById("imageGalleryC1");
    const imageGalleryC2 = document.getElementById("imageGalleryC2");
    const imageGalleryC3 = document.getElementById("imageGalleryC3");
    const imageFolder = "images/"; // Path to your image folder
    const imageCount = 13; // Number of images

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = imageFolder + i + ".jpg"; // Change the image file naming if needed
        img.alt = "Image " + i;
        img.classList.add("gallery-image");
        if (i<=(i/3)+1) {
            imageGalleryC1.appendChild(img);
        } else if (i>(i/3) && i<=(2*i/3)) {
            imageGalleryC2.appendChild(img);
        } else {
            imageGalleryC3.appendChild(img);
        }
        // imageGallery.appendChild(img);
    }
};
