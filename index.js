var ancho = 30;
var alto = 30;

var mundo = new Array(ancho);
for (var i = 0; i < ancho; i++) {
    mundo[i] = new Array(alto);
}

for (var x = 0; x < ancho; x++) {
    for (var y = 0; y < alto; y++) {
        mundo[x][y] = false;
    }
}

function write(string) {
    process.stdout.write(string);
}

function writeln(string) {
    process.stdout.write(string + "\n");
}

function clr() {
    process.stdout.write('\033c');
}

function getVecinos(x, y) {
    var totalVecinos = 0;
    var cx = 0;
    var cy = y - 1;
    for (cx = x - 1; cx <= x + 1; cx++) {
        if (cx < 0 || cy < 0) continue;
        if (cx > ancho || cy > alto) continue;

        if (mundo[cx][cy])
            totalVecinos++;
    }
    cy++;
    cx = x;
    if (mundo[cx - 1][cy])
        totalVecinos++;
    if (mundo[cx + 1][cy])
        totalVecinos++;
    cy++;
    for (cx = x - 1; cx <= x + 1; cx++) {
        if (cx < 0 || cy < 0) continue;
        if (cx > ancho || cy > alto) continue;

        if (mundo[cx][cy])
            totalVecinos++;
    }
    return totalVecinos;
}

function regla1(x, y) {
    int vecinos = getVecinos(x, y);
    if (vecinos == 3) {
        mundo[x][y] = true;
    }
}



for (var x = 0; x < ancho; x++) {
    for (var y = 0; y < alto; y++) {
        if (Math.random() > .9)
            mundo[x][y] = true;
    }
}

mundo[10][10] = true;


while (true) {
    var nMundo = mundo.slice();
    for (var x = 0; x < ancho; x++) {
        for (var y = 0; y < alto; y++) {
            regla1(x, y, nMundo);
        }
    }

    writeln("");
    for (var x = 0; x < ancho; x++) {
        for (var y = 0; y < alto; y++) {
            if (mundo[x][y]) {
                write("*");
            } else {
                write(" ");
            }
        }
        writeln("");
    }
}