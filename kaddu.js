var intervalId;
var isIntervalRunning = false;

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const imG1 = document.querySelector(".IMG1");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too :)";
});
noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});

function toggleImages() {
  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");
  var image3 = document.getElementById("img3");
  var image4 = document.getElementById("img4");
  var image5 = document.getElementById("img5");
  var image6 = document.getElementById("img6");

  if (
    image1.style.display === "block" ||
    image1.style.display === "" ||
    image3.style.display === "block" ||
    image3.style.display === ""
  ) {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "block";
  } else {
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
  }
  function changeImages() {
    if (image2.style.display === "none") {
      image2.style.display = "block";
      image5.style.display = "none";

      image4.style.display = "block";
      image6.style.display = "none";
    } else {
      image2.style.display = "none";
      image5.style.display = "block";
      image4.style.display = "none";
      image6.style.display = "block";
    }
  }

  if (isIntervalRunning) {
    clearInterval(intervalId);
    isIntervalRunning = false;
  } else {
    intervalId = setInterval(changeImages, 1000);
    isIntervalRunning = true;
  }
}
