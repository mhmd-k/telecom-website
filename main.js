// landing btns
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const bullets = document.querySelectorAll(".dots li");
let picCount = 0,
  left = 0;

leftBtn.addEventListener("click", () => {
  if (left === 0) {
    left = 200;
    picCount = 2;
  } else {
    left -= 100;
    picCount--;
  }
  document.querySelector(".opacity").style.left = `-${left}%`;
  bullets.forEach((ele, index) => {
    if (index === picCount) ele.classList.add("colored");
    else ele.classList.remove("colored");
  });
});
rightBtn.addEventListener("click", () => {
  if (left === 200) {
    left = 0;
    picCount = 0;
  } else {
    left += 100;
    picCount++;
  }
  document.querySelector(".opacity").style.left = `-${left}%`;
  bullets.forEach((ele, index) => {
    if (index === picCount) ele.classList.add("colored");
    else ele.classList.remove("colored");
  });
});
bullets.forEach((e, index) => {
  e.addEventListener("click", () => {
    left = index * 100;
    picCount = index;
    document.querySelector(".opacity").style.left = `-${left}%`;
    bullets.forEach((ele) => ele.classList.remove("colored"));
    e.classList.add("colored");
  });
});

// log in buttons
const logInBtns = document.querySelectorAll("#log-in");
const logInForm = document.querySelector(".log-in");
const closeBtn = document.querySelector("#close");
logInBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    logInForm.style.display = "block";
  });
});
closeBtn.addEventListener("click", () => {
  logInForm.style.display = "none";
});
