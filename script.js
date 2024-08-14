

class Game {
    constructor(selector) {
        this.element = document.getElementById(selector);
    }

    display(color) {
        this.element.style.color = color;
        this.element.innerText =" you won the task!";
        this.element.style.backgroundColor = "black";
        this.element.style.width = "200px";
        this.element.style.textAlign = "center";
        this.element.style.padding = "5px"; 
    }
}

const p1=new Game("h5");
const p2=new Game("h4");
const p3=new Game("h3");
const p4=new Game("h2");
const p5=new Game("h1");

  
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    setTimeout(()=>{
        p1.display("#06d6a0");
    },1000)

    setTimeout(()=>{
        p2.display("#f0a6ca");
    },2000)

    setTimeout(()=>{
        p3.display("orange");
    },3000)

    setTimeout(()=>{
        p4.display("red");
    },4000)

    setTimeout(()=>{
        p5.display("white");

    },5000)
    
});

