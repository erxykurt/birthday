const birthday=document.getElementById("birthday");
const helloAudio = document.getElementById("helloAudio");

const items = [
    document.querySelector(".character"),
    document.querySelector("h1"),
    document.querySelector("p"),
    document.querySelector("textarea"),
    document.querySelector("button")
];

// Elemanları sırayla göster
items.forEach((item, index) => {

    setTimeout(() => {

        item.classList.add("show");

    }, index * 300);

});

let played = false;

function playHello(){

    if(played) return;

    helloAudio.play();

    played = true;

}

// Telefonlarda ilk dokunuşta sesi çalıştırır
document.addEventListener("click", playHello, { once:true });

document.addEventListener("touchstart", playHello, { once:true });

const task = document.getElementById("task");

task.addEventListener("input", ()=>{

    task.style.boxShadow="0 0 35px #33ddff";

});
const button=document.getElementById("completeButton");
const character=document.querySelector(".character");
const completed=document.getElementById("completed");

const puffAudio=document.getElementById("puffAudio");

button.addEventListener("click",()=>{

    button.disabled=true;

    button.innerText="COMPLETING TASK...";

    setTimeout(()=>{

        puffAudio.play();

        character.classList.add("hide");

        button.classList.add("hide");

        task.classList.add("hide");

        document.querySelector("h1").classList.add("hide");

        document.querySelector("p").classList.add("hide");

        setTimeout(()=>{

    completed.classList.add("show");

setTimeout(()=>{

    document.body.classList.add("fade");

    setTimeout(()=>{

        document.body.classList.remove("fade");

        birthday.classList.add("show");

    },800);

},2000);

},700);

    },1500);

});