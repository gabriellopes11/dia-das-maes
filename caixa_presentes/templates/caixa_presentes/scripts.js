const track = document.getElementById('carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;

function updateSlidePosition() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  updateSlidePosition();
  if (index === slides.length - 1) {
    setTimeout(() => {
      track.style.transition = 'none';
      index = 0;
      updateSlidePosition();
      void track.offsetWidth; // força o reflow
      track.style.transition = 'transform 0.5s ease-in-out';
    }, 500);
  }
});

prevBtn.addEventListener('click', () => {
  if (index === 0) {
    track.style.transition = 'none';
    index = slides.length - 2;
    updateSlidePosition();
    void track.offsetWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
  } else {
    index--;
    updateSlidePosition();
  }
});
