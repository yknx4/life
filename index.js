var ancho = 150;
var alto = 30;
var log = false;

var mundo = new Array(ancho);

for (var i = 0; i < ancho; i++) {
    mundo[i] = new Array(alto);
}

for (var x = 0; x < ancho; x++) {
    for (var y = 0; y < alto; y++) {
        mundo[x][y] = false;
    }
}

function copyMundo() {
    var newArr = new Array(ancho);

    for (var i = 0; i < ancho; i++) {
        newArr[i] = new Array(alto);
    }

    for (var x = 0; x < ancho; x++) {
        for (var y = 0; y < alto; y++) {
            newArr[x][y] = mundo[x][y];
        }
    }
    return newArr;
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

function getPositionState(x, y, imundo) {
    if (x < 0) x = ancho + x;
    if (x >= ancho) x = x - ancho;
    if (y < 0) y = alto + y;
    if (y >= alto) y = y - alto;
    if (log)
        if (imundo[x][y]) writeln("Position (" + x + "," + y + "): " + imundo[x][y]);
    return imundo[x][y];
}

function getPositionStateMundo(x, y) {
    return getPositionState(x, y, mundo);
}

function setPositionState(x, y, value, imundo) {
    if (x < 0) x = ancho + x;
    if (x >= ancho) x = x - ancho;
    if (y < 0) y = alto + y;
    if (y >= alto) y = y - alto;
    imundo[x][y] = value;
}

function setPositionStateMundo(x, y, value) {
    setPositionState(x, y, value, mundo);
}

function getVecinos(x, y, imundo) {
    var totalVecinos = 0;
    var cx = 0;
    var cy = y - 1;
    for (cx = x - 1; cx <= x + 1; cx++) {
        if (getPositionState(cx, cy, imundo))
            totalVecinos++;
    }
    cy++;
    cx = x;
    if (getPositionState(cx - 1, cy, imundo))
        totalVecinos++;
    if (getPositionState(cx + 1, cy, imundo))
        totalVecinos++;
    cy++;
    for (cx = x - 1; cx <= x + 1; cx++) {
        if (getPositionState(cx, cy, imundo))
            totalVecinos++;
    }
    return totalVecinos;
}

function regla1(x, y, imundo) {
    var vecinos = getVecinos(x, y, imundo);
    if (vecinos == 3) {
        if (log) writeln("Position (" + x + "," + y + ") has " + vecinos + " neighbors. Life~");
        mundo[x][y] = true;
    }
}

function regla23(x, y, imundo) {
    if (imundo[x][y]) {
        var vecinos = getVecinos(x, y, imundo);
        if (vecinos < 2) {
            mundo[x][y] = false;
        }
        if (vecinos > 3) {
            mundo[x][y] = false;
        }

    }
}

function printWorld() {
    var prtChar = "*";
    writeln("");
    for (var i = 0; i < ancho; i++)
        write("_");
    writeln("");
    for (var y = 0; y < alto; y++) {
        write("|");
        for (var x = 0; x < ancho; x++) {
            if (mundo[x][y]) {

                write(prtChar + "");
            } else {
                write(" ");
            }
        }
        write("|");
        writeln("");
    }
    for (var i = 0; i < ancho; i++)
        write("_");
    writeln("");
}

function randomInitialize() {
    for (var x = 0; x < ancho; x++) {
        for (var y = 0; y < alto; y++) {
            if (Math.random() > .9)
                mundo[x][y] = true;
        }
    }
}




function gameCycle() {

    clr();
    var nMundo = copyMundo();
    if (log) writeln("================ NEW CYLE ===============")
    if (!log) printWorld();
    for (var x = 0; x < ancho; x++) {
        for (var y = 0; y < alto; y++) {
            regla1(x, y, nMundo);
            regla23(x, y, nMundo);
        }
    }

}

clr();
randomInitialize();
setInterval(gameCycle, 1000);