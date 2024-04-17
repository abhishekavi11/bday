document.addEventListener('DOMContentLoaded', function() {
    const btsVideo = document.getElementById('bts-video');
  
    btsVideo.addEventListener('mouseenter', function() {
      this.play();
    });
  
    btsVideo.addEventListener('mouseleave', function() {
      this.pause();
    });
  });