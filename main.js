





const socket = io('http://localhost:3000');
const msginput = document.getElementById("msg");



socket.on("connect", () =>{
  
})

socket.on('rcv-msged', message=>{ // Sending Message to Everyone on the Server.
  const el = document.createElement("span");
    el.classList.add("rcv-msg");
    const box = document.getElementById("isme");
    el.textContent = message;
    box.appendChild(el);
    var objDiv = document.getElementById("isme");
    objDiv.scrollTop = objDiv.scrollHeight; 
})
var input = document.querySelector("input");
input.addEventListener("keypress", function (event) { // Send Msg on enter.
  if (event.key === "Enter") {
    const el = document.createElement("span");
    el.classList.add("snd-msg");
    const box = document.getElementById("isme");
    var input = document.querySelector("input").value;
    el.textContent = input;
    if(input===""){

    }
    else{
      box.appendChild(el);
      document.querySelector("input").value = "";
      socket.emit('send-message',input);
      var objDiv = document.getElementById("isme");
      objDiv.scrollTop = objDiv.scrollHeight; 
    }
    
  }
});

function save() {
  const el = document.createElement("span");

  el.classList.add("snd-msg");

  const box = document.getElementById("isme");

  var input = document.querySelector("input").value;
  if(input===""){

  }
  else{
    box.appendChild(el);
    el.textContent = input;
    socket.emit('send-message',input);
    document.querySelector("input").value = "";
    var objDiv = document.getElementById("isme");
    objDiv.scrollTop = objDiv.scrollHeight; 
  }
 
}

