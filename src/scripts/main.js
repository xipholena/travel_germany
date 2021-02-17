'use strict';

const pictureGates = document.querySelector('.form__picture-gates');
const contactSection = document.querySelector('.contacts__container');
const flex = document.querySelector('.contacts__flex-wrapper');

const movePic = () => {

  if (window.innerWidth < 1500) {
    pictureGates.remove();
   contactSection.append(pictureGates);
  } else {
    flex.append(pictureGates);
  }
};

movePic();

window.addEventListener('resize', movePic);
