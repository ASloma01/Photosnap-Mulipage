"use strict";

const ham = document.querySelector(".menu__ham");
const overflow = document.querySelector(".overflow");

const toggleOverflow = () => {
  overflow.classList.toggle("appear");
};

ham.addEventListener("click", toggleOverflow);
