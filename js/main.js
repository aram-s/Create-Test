window.addEventListener('load', () => {
  const tracks = document.querySelectorAll('.scroll-track');

  tracks.forEach(track => {
      const contents = track.querySelectorAll('.scroll-content');
      const images = track.querySelectorAll('.scroll-image');

      let contentWidth = 0;

      images.forEach(image => {
          contentWidth += image.offsetWidth;
      });

      contentWidth = contentWidth / 2;

      contents.forEach(content => {
          content.style.width = contentWidth + 'px';
      });

      track.style.setProperty('--content-width', contentWidth + 'px');
  });
});


const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");

burger.addEventListener("click", ()=>{
    if (burgerMenu.classList.contains("open")) {
        burgerMenu.classList.remove("open")
    } else {
        burgerMenu.classList.add("open")
    }

});