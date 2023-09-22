// window.onload = function() {
//     const imageGallery = document.getElementById("imageGallery");
//     const imageGalleryC1 = document.getElementById("imageGalleryC1");
//     const imageGalleryC2 = document.getElementById("imageGalleryC2");
//     const imageGalleryC3 = document.getElementById("imageGalleryC3");
//     const imageFolder = "images/"; // Path to your image folder
//     const imageCount = 13; // Number of images

//     for (let i = 1; i <= imageCount; i++) {
//         const img = document.createElement("img");
//         img.src = imageFolder + i + ".jpg"; // Change the image file naming if needed
//         img.alt = "Image " + i;
//         img.classList.add("gallery-image");
//         if (i<=(i/3)+1) {
//             imageGalleryC1.appendChild(img);
//         } else if (i>(i/3) && i<=(2*i/3)) {
//             imageGalleryC2.appendChild(img);
//         } else {
//             imageGalleryC3.appendChild(img);
//         }
//         // imageGallery.appendChild(img);
//     }
// };


// // Get the menu toggle button and the dropdown menu
// const menuToggle = document.querySelector('.menu-toggle');
// const closeToggle = document.querySelector('.close-toggle');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// // Add a click event listener to the menu toggle button
// menuToggle.addEventListener('click', () => {
//     // Add the "active" class to show the dropdown menu
//     dropdownMenu.classList.add('active');
// });

// // Add a click event listener to the close toggle button
// closeToggle.addEventListener('click', () => {
//     // Remove the "active" class to hide the dropdown menu
//     dropdownMenu.classList.remove('active');
// });

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
document.getElementById("myNav").style.height = "0%";
}





