let startTime;
let clickCount = 0;

function changeColor() {
  const body = document.querySelector("body");
  const resultElement = document.getElementById("result");

  if (clickCount === 0) {
    startTime = new Date().getTime(); 
    body.style.backgroundColor = "green";
  } else {
    let endTime = new Date().getTime();
    let totalTime = endTime - startTime;
    resultElement.innerHTML = `The time between the first and second click is ${totalTime} milliseconds.`;
  }

  clickCount++;
}

document.getElementById("clickButton").addEventListener("click", changeColor);
