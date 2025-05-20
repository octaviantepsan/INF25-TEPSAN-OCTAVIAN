let passw = document.getElementById("passw");
let confirmPassw = document.getElementById("confirmPassw");
let error = document.getElementById("errorText");
let confirmBtn = document.getElementById("confirmBtn");
let a = document.getElementById("a");
let b = document.getElementById("b");

console.log(passw);

passw.addEventListener("input", validarePassw);
confirmPassw.addEventListener("input", (ev) => validarePassw());
confirmBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    console.log("sal");
})

a.addEventListener("click", (ev) => {
    console.log("a");
})

b.addEventListener("click", (ev) => {
    console.log("b");
    ev.stopPropagation();
})

function validarePassw() {
    if (passw.value == confirmPassw.value && passw.value != "") {
        confirmBtn.disabled = false;

        error.innerText = "";
        //error.style.color = "green";
    }
    else {
        confirmBtn.disabled = true;
        error.innerText = "Parola nu este identica";
    }
}
