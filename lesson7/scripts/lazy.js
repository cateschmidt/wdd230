let imagesToLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 1
}
const options = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, imageObserver) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imageObserver.unobserve(item.target);
        }
      });
    }, imageOptions, options);
    imagesToLoad.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }