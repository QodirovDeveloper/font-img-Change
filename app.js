// !======================
// ! counter
const btns = document.querySelectorAll(".btn");
const h1 = document.querySelector("h1");
let limitMin = -5;
let limitMax = 10;
h1.style.color = "yellow";
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == "+") {
      if (limitMax > count) {
        count++;
        h1.textContent = count;
        if (limitMax == count) {
          btn.disabled = true;
        }
        btns[1].disabled = false;
      }
    }
    if (btn.textContent == "-") {
      if (limitMin < count) {
        count--;
        h1.textContent = count;
        if (limitMin == count) {
          btn.disabled = true;
        }
        btns[0].disabled = false;
      }
    }
    if (h1.textContent == 0) {
      h1.style.color = "yellow";
    } else if (h1.textContent > 0) {
      h1.style.color = "green";
    } else if (h1.textContent < 0) {
      h1.style.color = "red";
    }
  });
});

// ! ====================
// ! font family

const buttons = document.querySelectorAll(".button");
buttons.forEach((fBtn) => {
  fBtn.addEventListener("click", () => {
    document.body.style.fontFamily = fBtn.textContent;
    buttons.forEach((fBtn) => {
      fBtn.classList.remove("active");
    });
    fBtn.classList.add("active");
  });
});

// !====================
// ! suratni o'zgartirish
const changeA = document.querySelectorAll(".changeA")
const image1 = ["url('/images/serfing1.jpeg')"];
const image2 = ["url('/images/action2.jpg')"];
chButton1.addEventListener("click", () => {
  document.body.style.backgroundImage = image1;
});
chButton2.addEventListener("click", () => {
  document.body.style.backgroundImage = image2;
});
