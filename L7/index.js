// let x = 10;
// x = 5;

// const y = [1, 2, 3];
// y[0] = 2;
// console.log(y);

// y = [3, 2, 1];
// console.log(y);

function suma(a, b) {
    return a + b;
}

function validareCNP(cnp) {
    const cheie = "279146358279";
    let control = 0;
    let numberVerifier = /^[0-9]+$/;

    if(numberVerifier.test(cnp) == false) {
        console.log("CNP-ul trebuie sa fie un numar");
        return false;
    }
        //love u more than anything, forever babe   ##written by wifey <3
    if(cnp.length != 13) {
        console.error("CNP-ul trebuie sa contina 13 caractere");
        return false;
    }

    for(let i = 0; i < cheie.length; i++) {
        control += cheie[i] * cnp[i]; 
    }
    control = control % 11;

    if(control == 10) {
        control = 1;
    }

    return control == cnp[12];
}

console.log(validareCNP("2990219469000"));
