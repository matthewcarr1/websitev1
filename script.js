
function openNav() {
    document.getElementById("mobileNav").style.height = "100%";
}
  
function closeNav() {
document.getElementById("mobileNav").style.height = "0%";
}

let currentIndex = 0;

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

    // Update active year button
    updateActiveButton(index);
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




