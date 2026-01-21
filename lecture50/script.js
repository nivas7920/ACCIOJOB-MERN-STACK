const container = document.getElementById("container");
const sessionName = document.getElementById("SessionName");
const studyDuration = document.getElementById("StudyDuration");
const breakDuration = document.getElementById("BreakDuration");
const sessionNumber = document.getElementById("SessionNumber");
const error = document.getElementById("error");
const startbtn = document.getElementById("btn");


const inputs = [sessionName, studyDuration, breakDuration, sessionNumber];



function validateForm() {
  let isValid = true;
  error.textContent = "";

  if (sessionName.value.trim().length < 3) {
    error.textContent = "Session name must be at least 3 characters";
    isValid = false;
  } else if (studyDuration.value < 5) {
    error.textContent = "Study duration must be at least 5 minutes";
    isValid = false;
  } else if (breakDuration.value < 2) {
    error.textContent = "Break duration must be at least 2 minutes";
    isValid = false;
  } else if (sessionNumber.value < 1) {
    error.textContent = "Study cycles must be at least 1";
    isValid = false;
  }

  startbtn.disabled = !isValid;
  return isValid;
}

inputs.forEach(input => {
  input.addEventListener("input", validateForm);
});





const dashboard = document.getElementById("dashboard");
const phaseText = document.getElementById("phase");
const timerText = document.getElementById("timer");
const cycleText = document.getElementById("cycle");
const progressBar = document.getElementById("progress-bar");

let timer;
let remainingTime;
let totalTime;
let isPaused = false;
let currentCycle = 1;
let totalCycles;
let phase = "study";

function startTimer(seconds) {
  totalTime = seconds;
  remainingTime = seconds;

  timer = setInterval(() => {
    if (!isPaused) {
      remainingTime--;

      updateTimer();
      progressBar.style.width =
        ((totalTime - remainingTime) / totalTime) * 100 + "%";

      if (remainingTime <= 0) {
        clearInterval(timer);
        nextPhase();
      }
    }
  }, 100);
}


function updateTimer() {
  let min = Math.floor(remainingTime / 60);
  let sec = remainingTime % 60;
  timerText.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
}



function nextPhase() {
  if (phase === "study") {
    phase = "break";
    phaseText.textContent = "Break ";

    fetchMotivationalQuote();
    startTimer(breakDuration.value * 60);

  } else {
    currentCycle++;

    if (currentCycle > totalCycles) {
      phaseText.textContent = "Session Complete ";
      timerText.textContent = "Done!";
      quoteText.textContent = "Amazing discipline today!";
      saveHistory();
      return;
    }

    phase = "study";
    phaseText.textContent = "Studying";
    quoteText.textContent = "";
    cycleText.textContent = `Cycle ${currentCycle} of ${totalCycles}`;

    startTimer(studyDuration.value * 60);
  }
}


startbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  container.style.display = "none";
  dashboard.style.display = "block";

  totalCycles = Number(sessionNumber.value);
  cycleText.textContent = `Cycle 1 of ${totalCycles}`;

  startTimer(studyDuration.value * 60);
});




const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");


pauseBtn.addEventListener("click",()=>{ 
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
});

resumeBtn.addEventListener("click",()=>{
    isPaused = false;
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});




const quoteText = document.getElementById("quote");
async function fetchMotivationalQuote() {

  quoteText.textContent = "Loading motivation...";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

     // console.log(data);

     quoteText.textContent = `"${data.quote}" — ${data.author}`;

  } catch (err) {
    quoteText.textContent = "Not Showing Quotes ";
  }
}


const saveStatus = document.getElementById("saveStatus");

let autoSave;

function saveProgress() {
  localStorage.setItem("focusFlow", JSON.stringify({
    phase,
    remainingTime,
    currentCycle,
    totalCycles
  }));

  saveStatus.textContent = "Progress saved ";
  setTimeout(() => saveStatus.textContent = "", 1500);
}
autoSave = setInterval(saveProgress, 10000);






