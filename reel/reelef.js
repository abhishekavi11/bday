// Add a smooth scrolling effect to the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Change the text of the video description on hover
const videoTexts = document.querySelectorAll('[id^="video"]');



// Automatically play the video when the cursor hovers over it
const videoElements = document.querySelectorAll('[id^="video"]');

videoElements.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});