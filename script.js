// script.js

document.addEventListener("DOMContentLoaded", function () {
  const interestsCarousel = document.getElementById("interests-carousel");
  const interestsImages = Array.from(
    interestsCarousel.getElementsByTagName("img")
  );
  let interestsIndex = 0;

  function showNextInterest() {
    interestsImages.forEach((image) => (image.style.opacity = 0));
    interestsImages[interestsIndex].style.opacity = 1;
    interestsIndex = (interestsIndex + 1) % interestsImages.length;
  }

  setInterval(showNextInterest, 2000);

  const inspirationCarousel = document.getElementById("inspiration-carousel");
  const inspirationWords = Array.from(
    inspirationCarousel.getElementsByTagName("span")
  );
  let inspirationIndex = 0;

  function showNextWord() {
    inspirationWords.forEach((word) => (word.style.opacity = 0));
    inspirationWords[inspirationIndex].style.opacity = 1;
    inspirationIndex = (inspirationIndex + 1) % inspirationWords.length;
  }

  setInterval(showNextWord, 2000);
});
