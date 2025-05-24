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
const changeA = document.querySelectorAll(".changeA");
const image1 = ["url('/images/serfing1.jpeg')"];
const image2 = ["url('/images/action2.jpg')"];
chButton1.addEventListener("click", () => {
  document.body.style.backgroundImage = image1;
});
chButton2.addEventListener("click", () => {
  document.body.style.backgroundImage = image2;
});

// !======================
// ! sizeni katta va kichik qilish
// ! Best practice

// ✅ Font-size boshqarish uchun best practice kod
const content = document.querySelector("div[style*='font-size']");
const kichikBtn = document.getElementById("kichikBtn");
const kattaBtn = document.getElementById("kattaBtn");

const STEP = 2;
const MIN_SIZE = 14;
const MAX_SIZE = 50;

function updateFontSize(change) {
  const currentSize = parseFloat(getComputedStyle(content).fontSize);
  const newSize = currentSize + change;

  if (newSize >= MIN_SIZE && newSize <= MAX_SIZE) {
    content.style.fontSize = `${newSize}px`;
  }
}

kichikBtn.addEventListener("click", () => updateFontSize(-STEP));
kattaBtn.addEventListener("click", () => updateFontSize(STEP));
