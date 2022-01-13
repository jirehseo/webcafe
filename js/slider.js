const moveSlider = () => {
  const maxlength = $('.innerImg').length - 1;
  const slideWidth = window.innerWidth * 0.7;
  console.log('aa', index);
  index = index > maxlength ? 0 : index < 0 ? maxlength : index;
  console.log(index);
  $('.sliderListContainer').animate({
    left: -index * slideWidth,
  });
};

let index = 0;

$(document).ready(function () {
  $('.move').on('click', 'a.right', function () {
    index++;
    moveSlider();
  });

  $('.move').on('click', 'a.left', function () {
    index--;
    moveSlider();
  });
});

setInterval(() => {
  index++;
  moveSlider();
}, 7000);
