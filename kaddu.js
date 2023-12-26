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

  var image7 = document.getElementById("img7");
  var image8 = document.getElementById("img8");
  var image9 = document.getElementById("img9");
  var image10 = document.getElementById("img10");
  var image11 = document.getElementById("img11");
  var image12 = document.getElementById("img12");
  var image13 = document.getElementById("img13");
  var image14 = document.getElementById("img14");

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
