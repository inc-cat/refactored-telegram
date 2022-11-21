//access to image container (maybe)
//access this btn
//access that btn
//access answer container
const imageRange = [
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs15.jpg",
  "HOTDOGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs2.jpg",
  "HOTDOGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs1.jpg",
  "LEGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs20.jpg",
  "LEGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs6.jpg",
  "HOTDOGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs21.jpg",
  "LEGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs9.jpg",
  "LEGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs22.jpg",
  "LEGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs19.jpg",
  "HOTDOGS",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/07/legs-or-hot-dogs14.jpg",
  "LEGS",
  "https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=800",
  "HOTDOGS",
];

const currentImage = document.getElementById("image");

const legsButton = document.getElementById("legsButton");

const hotdogsButton = document.getElementById("hotdogsButton");

const answerMessage = document.getElementById("answerMessage");

const subtitle = document.getElementById("subtitle");

// console.dir(legsButton);
let imageIndex = 0;
let score = 0;

// console.log(imageIndex, "1");

function checkAnswer(event) {
  let answer = imageRange[imageIndex + 1];

  if (event.target.innerText === answer) {
    answerMessage.innerText = "CORRECT!";
    score++;
  } else {
    answerMessage.innerText = "INCORRECT!";
  }
  imageIndex += 2;
  currentImage.src = imageRange[imageIndex];
  if (imageIndex > 19) {
    subtitle.innerText = `YOU SCORED ${score} out of 10`;

    legsButton.hidden = true;
    hotdogsButton.hidden = true;

    answerMessage.innerText = "";
    console.log("YOU WIN");
  }
}

legsButton.addEventListener("click", checkAnswer);

hotdogsButton.addEventListener("click", checkAnswer);
