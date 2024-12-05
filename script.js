
function openNav() {
    document.getElementById("mobileNav").style.height = "100%";
}
  
function closeNav() {
document.getElementById("mobileNav").style.height = "0%";
}


// For Timeline on NZ page//
let currentIndex = 0;

// Image mapping for each slide
const images = {
    "Christchurch": "images/NzTimeline/christchurchImage.jpg",
    "Arthur's Pass": "images/NzTimeline/ArthursPassMe.jpg",
    "Hokitika": "images//NzTimeline/HokitikaBridge.jpg",
    "Franz Josef": "images//NzTimeline/FranzJosefMe.jpg",
    "Wañaka": "images//NzTimeline/RoysPeakMe.jpg",
    "Queen's Town": "images//NzTimeline/Queenstown.jpg",
    "Milford Track": "images//NzTimeline/Milford Track.jpg",
    "Mt.Cook": "images//NzTimeline/SeftonBiv.jpg"
};

// Function to show a specific slide by index
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const totalSlides = slides.length;

    // Update current index and ensure it's within bounds
    currentIndex = (index + totalSlides) % totalSlides;

    // Calculate the new translateX value to show the correct slide
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;

    // Update the image
    updateImage(currentIndex);

    // Update active year button
    updateActiveButton(index);
}

// Function to update the image based on the current slide
function updateImage(index) {
    const slides = document.querySelectorAll('.slide');
    const slide = slides[index];
    const year = slide.dataset.year; // Get the data-year attribute of the current slide
    const imgElement = document.querySelector('.nz-photo img');

    // Update the image src
    imgElement.src = images[year] || "images/defaultImage.jpg"; // Default image if no match
}

// Function to update active year button
function updateActiveButton(index) {
    const yearButtons = document.querySelectorAll('.year-list button');
    yearButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });
}

// Show the first slide initially
showSlide(0);




