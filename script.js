// Functionality for the first carousel (interests-carousel)
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the carousel container and its images
  const carousel = document.getElementById("interests-carousel");
  const images = carousel.querySelectorAll("img");
  const numImages = images.length;
  let currentIndex = 0;

  // Function to display a specific image and hide others
  function showImage(index) {
    images.forEach((img, idx) => {
      img.style.display = idx === index ? "block" : "none";
    });
  }

  // Function to move to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
  }

  // Function to move to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    showImage(currentIndex);
  }

  // Initial setup: displaying the first image
  showImage(currentIndex);

  // Automatic sliding: changing slide every 3 seconds
  setInterval(nextImage, 3000);

  // Handling click events for navigation buttons
  document.getElementById("prevBtn").addEventListener("click", prevImage);
  document.getElementById("nextBtn").addEventListener("click", nextImage);
});

// Functionality for the second carousel (interests-carousel2)
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the carousel container and its images
  const carousel = document.getElementById("interests-carousel2");
  const images = carousel.querySelectorAll("img");
  const numImages = images.length;
  let currentIndex = 0;

  // Function to display a specific image and hide others
  function showImage(index) {
    images.forEach((img, idx) => {
      img.style.display = idx === index ? "block" : "none";
    });
  }

  // Function to move to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
  }

  // Function to move to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    showImage(currentIndex);
  }

  // Initial setup: displaying the first image
  showImage(currentIndex);

  // Automatic sliding: changing slide every 3 seconds
  setInterval(nextImage, 3000);

  // Handling click events for navigation buttons
  document.getElementById("prevBtn2").addEventListener("click", prevImage);
  document.getElementById("nextBtn2").addEventListener("click", nextImage);
});

// Functionality for the third carousel (inspiration-carousel)
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the carousel container and its words
  const carousel = document.getElementById("inspiration-carousel");
  const words = carousel.querySelectorAll("span");
  let currentIndex = 0;

  // Function to display a specific word and hide others
  function showWord(index) {
    words.forEach((word, idx) => {
      word.style.display = idx === index ? "inline-block" : "none";
    });
  }

  // Function to move to the next word
  function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    showWord(currentIndex);
  }

  // Initial setup: displaying the first word
  showWord(currentIndex);

  // Flashing effect: changing word every 5 seconds
  setInterval(nextWord, 6000);
});

// Function to open different pages based on the provided pageName
function openPage(pageName) {
  // Selecting the content container
  let content = document.getElementById("content");

  // Switching content based on the provided pageName
  switch (pageName) {
    case "homepage":
      content.innerHTML = "<h2>Welcome</h2>";
      break;
    case "about":
      content.innerHTML = "<h2>About</h2>";
      break;
    case "career":
      content.innerHTML = "<h2>Career</h2>";
      break;
    case "learning":
      content.innerHTML = "<h2>Learning</h2>";
      break;
    case "ambition":
      content.innerHTML = "<h2>Future Ambitions</h2>";
      break;
    case "game":
      content.innerHTML = "<h2>Game</h2>";
      break;
    default:
      content.innerHTML = "<h2>Welcome</h2>";
  }
}
