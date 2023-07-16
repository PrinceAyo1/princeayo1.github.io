document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("interests-carousel");
  const images = carousel.querySelectorAll("img");
  const numImages = images.length;
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, idx) => {
      img.style.display = idx === index ? "block" : "none";
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    showImage(currentIndex);
  }

  // Initial setup
  showImage(currentIndex);

  // Automatic sliding (change slide every 3 seconds)
  setInterval(nextImage, 3000);

  // Handle click events for navigation
  document.getElementById("prevBtn").addEventListener("click", prevImage);
  document.getElementById("nextBtn").addEventListener("click", nextImage);

  setInterval(showNextWord, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("inspiration-carousel");
  const words = carousel.querySelectorAll("span");
  let currentIndex = 0;

  function showWord(index) {
    words.forEach((word, idx) => {
      word.style.display = idx === index ? "inline-block" : "none";
    });
  }

  function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    showWord(currentIndex);
  }

  // Initial setup
  showWord(currentIndex);

  // Flashing effect (change word every 2 seconds)
  setInterval(nextWord, 5000);
});
