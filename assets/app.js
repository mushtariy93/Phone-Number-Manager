
const titleEl = document.querySelector(".title");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal");
const okBtn = document.querySelector(".ok-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const phoneInput = document.getElementById("phone-input");
const lightModeBtn = document.querySelector(".light");
const darkModeBtn = document.querySelector(".dark");
const btnEl = document.querySelector(".btn_button");



const TEL = [
  "+998 00 111 11 11",
  "+998 00 222 22 22",
  "+998 90 007 70 77",
  "+998 94 115 11 58",
  "+998 93 163 16 21",
  "+998 95 009 13 50",
  "+998 94 441 41 88",
  "+998 93 880 05 71",
  "+998 99 418 50 35",
  "+998 88 727 31 11",
  "+998 91 683 10 60",
  "+998 97 392 08 22",
  "+998 99 396 71 72",
  "+998 93 693 41 43",
  "+998 90 149 46 43",
];
function randomTel() {
  btnEl.setAttribute("disabled", true);
  const interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL.length);
    titleEl.textContent = TEL[randomNumber];
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    btnEl.removeAttribute("disabled");
    // remove
    TEL.splice(TEL.indexOf(titleEl.textContent), 1);
    audioEl.play();
  }, 3000);
}
btnEl.addEventListener("click", randomTel);

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  phoneInput.value = ""; 
});



cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});


okBtn.addEventListener("click", () => {
  const newPhone = phoneInput.value.trim();
  if (newPhone) {
    TEL.push(newPhone); 
    titleEl.textContent = newPhone; 
    alert(`Phone number ${newPhone} added successfully!`);
  } else {
    alert("Please enter a valid phone number.");
  }
  modal.classList.add("hidden");
});


lightModeBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
});


darkModeBtn.addEventListener("click", () => {
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
});
