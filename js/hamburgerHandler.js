const merBtn = document.querySelector("#merBtn");
const menyMer = document.querySelector("#navMerContainer");

merBtn.addEventListener("click", () => {
  menyMer.classList.toggle("dropdownActive");
});

const redaksjonerBtn = document.querySelector("#redaksjonsBtn");
const menyRedaksjoner = document.querySelector("#navRedaksjonerContainer");

redaksjonerBtn.addEventListener("click", () => {
  menyRedaksjoner.classList.toggle("dropdownActive");
});

const hamburgerBtn = document.querySelector("#hamburgerDropdown");
const menyHamburger = document.querySelector("#hamburgerContainerMob");

hamburgerBtn.addEventListener("click", () => {
  menyHamburger.classList.toggle("hamburgerDropdownActive");
});

const redaksjonerBtnMobile = document.querySelector("#redaksjonerMobBtn");
const menyRedaksjonerMobile = document.querySelector("#redaksjonerMobElement");

redaksjonerBtnMobile.addEventListener("click", () => {
  menyRedaksjonerMobile.classList.toggle("hamburgerDropdownActive");
});

if (window.innerWidth <= 768) {
  if (hamburgerBtn.style.display === "none") {
    menyHamburger.classList.remove("hamburgerDropdownActive");
  }
}
