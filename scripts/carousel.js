const track = document.querySelector('.carousel__track');
const slides= Array.from(track.children);
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'rem';
};

slides.forEach(setSlidePosition);

const moveToSlide =(track, currentSlide, targetSlide) =>{
  track.style.transform = 'translateX(-' + targetSlide.style.left +')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
 currentDot.classList.remove('current-slide');
 targetDot.classList.add('current-slide');
}

//when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);


})
