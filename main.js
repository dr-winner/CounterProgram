const decBtn = document.getElementById("decBtn");
const resBtn = document.getElementById("resBtn");
const incBtn = document.getElementById("incBtn");

const lbl1 = document.getElementById("lbl1");

let count = 0;

incBtn.onclick = function(){
    count++;
    lbl1.textContent = count;
}

decBtn.onclick = function(){
    count--;
    lbl1.textContent = count;
}

resBtn.onclick = function(){
    count = 0;
    lbl1.textContent = count;
}