class Punct {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }

    calcCadran() {
        if (this.X > 0 && this.Y >= 0) {
            return 1;
        }
        else if (this.X <= 0 && this.Y > 0) {
            return 2;
        }
        else if (this.X < 0 && this.Y <= 0) {
            return 3;
        }
        else {
            return 4;
        }
    }
}

const poligon = [new Punct(2, 2), new Punct(10, 2), new Punct(13, 5), new Punct(5, 5)];

function afisarePoligon() {
    console.log("------------------");

    for (let punct of poligon) {
        console.log(`X: ${punct.X} , Y: ${punct.Y}`);
    }

    console.log("------------------");
}

function comparaPuncte(a, b) {
    let cadA = a.calcCadran();
    let cadB = b.calcCadran();

    if (cadA < cadB) {
        return -1;
    }
    else if (cadA > cadB)
        return 1;
    else {
        return calcDet(b, O, a) > 0 ? 1 : -1;
    }
}

function calcDet(a, b, c) {
    return a.X * b.Y + b.X * c.Y + c.X * a.Y - b.Y * c.X - c.Y * a.X - a.Y * b.X;
}

let G = new Punct(0, 0);
let O = new Punct(0, 0);

for (let punct of poligon) {
    G.X += punct.X;
    G.Y += punct.Y;
}

G.X /= poligon.length;
G.Y /= poligon.length;

for (let punct of poligon) {
    punct.X -= G.X;
    punct.Y -= G.Y;
}

afisarePoligon()

console.log(`Centru.X: ${G.X} , Centru.Y: ${G.Y}`);

for (let i = 0; i < poligon.length - 1; i++) {
    for (let j = i + 1; j < poligon.length; j++) {
        if (comparaPuncte(poligon[i], poligon[j]) == 1) {
            let temp = poligon[j];
            poligon[j] = poligon[i];
            poligon[i] = temp;
        }
    }
}

let M = new Punct(2, 4);
M.X -= G.X;
M.Y -= G.Y;
let pos = 0;
console.log(`M.X: ${M.X} , M.Y: ${M.Y}`);
for (let i = 0; i < poligon.length; i++) {
    if (comparaPuncte(M, poligon[i]) == 1) {
        pos++;
    }
    else {
        break;
    }
}

console.log(`pos.X: ${poligon[pos].X} , pos.Y: ${poligon[pos].Y}`);
console.log(`pos+1.X: ${poligon[(pos + 1) % poligon.length].X} , pos+1.Y: ${poligon[(pos + 1) % poligon.length].Y}`);

afisarePoligon();