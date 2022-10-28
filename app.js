const btnS = document.getElementById("btnS")
const btnU = document.getElementById("btnU")
const input = document.querySelector("#input")
const form = document.getElementById("form")
const textArea = document.getElementById("text")

document.onclick = () => {
    textArea.innerHTML=""
    input.style.display="block"
    input.value=''
}

btnS.onclick = () => {
    btnS
        .classList
        .add("active")
    btnU
        .classList
        .remove("active")
    input.placeholder = "IP address, wallet address or file hash"
    input.value = ""
    input.style.display="block"
    textArea.innerHTML=""
}
btnU.onclick = () => {
    btnU
        .classList
        .add("active")
    btnS
        .classList
        .remove("active")
    input.placeholder = "Search or scan a URL"
    input.value = ""
    input.style.display="block"
    textArea.innerHTML=""
}

const textLoader = (identifier,text) => {
let speed = 10;
let watcher = 0;
let content = `${identifier.toString()} ${text.toString()}`;
textArea.innerHTML = "";
function typeWriter() {
    if(watcher < content.length){
        textArea.innerHTML += content.charAt(watcher);
        watcher++;
        setTimeout(typeWriter,speed);
    }
}
typeWriter();
}

const notFound = () => {
    textArea.innerHTML = "";
    textArea.innerHTML ="Not Found"
    textArea.style.fontWeight = '40px'
}

form.onsubmit = async (e) => {
    const data = {
            data : input.value
    }
    e.preventDefault()
    const r = await axios
        .post("http://localhost:5000/search", 
            
            JSON.stringify(data),
         {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        .then(result => {
            input.style.display = "none"
            textLoader(result.data.identifier,result.data.text)
         
        })
        .catch(error => {
            input.style.display = "none"
            notFound();
        });
}