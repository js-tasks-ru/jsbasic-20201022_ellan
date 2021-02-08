function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const rightArrow = document.querySelector('.carousel__arrow.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow.carousel__arrow_left');
  leftArrow.style.display = 'none';
  const shift = carouselInner.offsetWidth;
  let position = 0;
  let currentSlideNumber = 1;
  const slidesAmount = 4;

  rightArrow.onclick = () => {
    if (currentSlideNumber < 4) {
      position -= shift;
      carouselInner.style.transform = `translateX(${position}px)`;
      currentSlideNumber++; 
      leftArrow.style.display = '';
    } 
    if (currentSlideNumber == slidesAmount) {
      rightArrow.style.display = 'none';
    } 
  };

  leftArrow.onclick = () => {
    if (currentSlideNumber > 1) {
      position += shift;
      carouselInner.style.transform = `translate(${position}px)`;
      currentSlideNumber--;
      rightArrow.style.display = '';
    } 
    if (currentSlideNumber == 1) {
      leftArrow.style.display = 'none';
    }
  };
  
}
