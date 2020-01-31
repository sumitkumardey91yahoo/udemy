// Create worker
const myWorker = new Worker('worker.js');

// Send message to worker
 myWorker.postMessage('Hello!');


// Receive message from worker
myWorker.onmessage = function(e) {
 // console.log("here", document.getElementById("a"));
  document.getElementById("ok").innerHTML = e.data
}

var a = 10;
function data() {
    document.getElementById("a").innerHTML = a++;
}

// for(let i = 0; i< 1000000; i++) {
  
//    document.getElementById("ok").innerHTML = i
// }

