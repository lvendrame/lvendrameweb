"use strict";

function generateCPFDigits(cpf) {
    var digs = [0, 0],
        start = 11,
        i = 0,
        part = 0;

    for (; i < 9; i++) {
        part = parseInt(cpf.charAt(i));
        digs[1] += part * start;
        start--;
        digs[0] += part * start;
    }

    digs[0] %= 11;
    if (digs[0] < 2) {
        digs[0] = 0;
    }
    else {
        digs[0] = 11 - digs[0];
    }

    digs[1] += digs[0] * start;

    digs[1] %= 11;
    if (digs[1] < 2) {
        digs[1] = 0;
    }
    else {
        digs[1] = 11 - digs[1];
    }

    return "".concat(digs[0], digs[1]);
}

function generateCPF() {
    var cpf = "",
        i = 0;
    for (; i < 9; i++) {
        cpf = cpf.concat(parseInt(Math.random() * 10));
    }
    cpf = cpf.concat(generateCPFDigits(cpf));
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4");
}
