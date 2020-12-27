$(function () {
  $(".portfolio-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".arrow-left"),

    nextArrow: $(".arrow-right"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const modalButton = document.querySelector(".navbar__button");
const modal = document.querySelector(".modal");
const modalDialogClose = document.querySelector(".modal-dialog__close");

function modalShow() {
  modal.classList.add("modal_active");
}

function modalClose() {
  modal.classList.toggle("modal_active");
}

modalButton.addEventListener("click", modalShow);
modalDialogClose.addEventListener("click", modalClose);
