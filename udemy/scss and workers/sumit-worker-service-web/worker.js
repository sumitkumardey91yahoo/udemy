/* worker.js */

// Receive message from main file
self.onmessage = function(e) {
  console.log(e.data);
     function data() {
      for(let i = 0; i< 1000000; i++) {
        self.postMessage(i);
        //document.getElementById("ok").innerHTML = i
        //console.log(i)
     }
     
     }
     data();
  // Send message to main file
  
}