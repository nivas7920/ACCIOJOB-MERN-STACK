
// console.log("start");
// const obj = new Promise((resolve)=>{

//     console.log("inside promise");
//     setTimeout(()=>{
//         resolve("we are done");
//     },0);
// });

// obj.then((msg)=>{
//     console.log(msg);
// });

// console.log("end");


// 


// 🧠 Execution Points (Step-by-Step)

// Global Execution Context is created.

// console.log("start")

// Executes synchronously.

// Printed immediately.

// Promise is created

// The promise executor function runs synchronously.

// console.log("inside promise") is printed immediately.

// setTimeout(..., 0)

// Handed over to Web API.

// Callback goes to Task (Macrotask) Queue after timer completes.

// resolve() is not called yet.

// .then() is registered

// Callback is stored.

// It will execute only after the promise is resolved.

// .then() callback will go to Microtask Queue (later).

// console.log("end")

// Executes synchronously.

// Printed immediately.

// Call Stack becomes empty.

// Event Loop checks queues

// Takes setTimeout callback from Task Queue.

// resolve("we are done") is executed.

// Promise state changes to fulfilled.

// .then() callback is pushed into Microtask Queue.

// Microtask Queue executes before Task Queue

// console.log("we are done") is printed.

// ✅ Final Output
// start
// inside promise
// end
// we are done


// each microtask adds another microtasks  berfore excute if this happen t\\\

// Microtask Starvation (Point Explanation)
// ✔ Correct Statement

// If each microtask schedules another microtask before it finishes, the event loop never gets a chance to execute macrotasks. This causes starvation.



console.log("A");

setTimeout(()=>{
    console.log("B");
},1000);

Promise.resolve().then(()=> console.log("C"));

console.log("D");




// // restore on refresh
window.onload = () => {
  const saved = localStorage.getItem("focusFlow");
  if (!saved) return;

  const data = JSON.parse(saved);

  phase = data.phase;
  remainingTime = data.remainingTime;
  currentCycle = data.currentCycle;
  totalCycles = data.totalCycles;

  document.getElementById("container").style.display = "none";
  dashboard.style.display = "block";
};


Storage

// function saveCurrent() {
//   localStorage.setItem("current", JSON.stringify({
//     name: sessionName.value,
//     time: remainingTime
//   }));
// }

saveCurrent();

// function saveHistory() {
//   let h = JSON.parse(localStorage.getItem("history")) || [];
//   h.push(sessionName.value);
//   localStorage.setItem("history", JSON.stringify(h));
//   localStorage.removeItem("current");
// }


// 
// const historyBox = document.getElementById("history");
// function saveSession() {
//   if (!sessionName.value || !studyDuration.value) return;

//   let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

//   sessions.push({
//     name: sessionName.value,
//     time: Number(studyDuration.value) * totalCycles,
//     status: "Completed"
//   });

//   localStorage.setItem("sessions", JSON.stringify(sessions));
// }





// function showHistory() {
//   historyBox.innerHTML = "";

//   let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

//   sessions.forEach(s => {
//     let div = document.createElement("div");
//     div.textContent = `${s.name} - ${s.time} mins - ${s.status}`;

//     div.onclick = () => {
//       alert(
//         `Session Name: ${s.name}
//          Total Study Time: ${s.time} mins
//          Status: ${s.status}`
//       );
//     };

//     historyBox.appendChild(div);
//   });
// }



// saveSession();
// showHistory();


